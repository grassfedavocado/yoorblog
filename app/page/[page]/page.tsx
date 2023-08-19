import { redirect } from "next/navigation";
import Link from "next/link";
import db from "@/utils/database";
import { clerkClient } from "@clerk/nextjs";
import Card from "@/components/server/card";
import Button from "@/components/client/button";

type Props = {
  params: {
    page: string;
  };
};

export default async function Page({ params }: Props) {
  const page = parseInt(params.page) ?? 1;

  if (page == 1) return redirect("/");

  const offset = page * 9 - 9;

  const totalBlogs = await db.post.count({
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
  });

  const blogs = await db.post.findMany({
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
    take: 9,
    skip: offset,
  });

  if (blogs.length == 0) return redirect(`/`);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col bg-white">
        <div className="my-5 flex flex-col items-center justify-evenly gap-y-12 md:flex-row md:flex-wrap">
          {blogs?.map(async (blog, index) => {
            const username = (await clerkClient.users.getUser(blog.user_id))
              .username;

            return (
              <Card
                key={index}
                title={blog.title}
                author={username}
                content={blog.content}
                date={blog.created_at}
                link={`/u/${username}/b/${blog.slug}`}
              />
            );
          })}
        </div>

        <div className="my-8 text-center flex flex-grow justify-center">
          <Link href={`/page/${page - 1}`}>
            <Button text={`Page ${page - 1}`} />
          </Link>
          {totalBlogs - offset > 9 && (
            <Link href={`/page/${page + 1}`}>
              <Button
                text={`Page ${page + 1}`}
                disabled={totalBlogs - offset < 9 ? true : false}
              />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
