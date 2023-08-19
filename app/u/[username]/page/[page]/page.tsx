import { redirect } from "next/navigation";
import Link from "next/link";
import db from "@/utils/database";
import { clerkClient } from "@clerk/nextjs";
import Card from "@/components/server/card";
import Button from "@/components/client/button";

type Props = {
  params: {
    username: string;
    page: string;
  };
};

export default async function Page({ params }: Props) {
  const page = parseInt(params.page) ?? 1;

  if (page == 1) return redirect(`/u/${params.username}`);

  const offset = page * 9 - 9;

  const users = await clerkClient.users.getUserList({
    username: [params.username],
  });

  if (users.length == 0) {
    return (
      <main className="flex min-h-screen flex-col">
        <div className="w-full my-6 flex flex-col flex-grow items-center justify-center md:flex-row md:flex-wrap">
          <h1 className="text-4xl font-bold">No User Found!</h1>
        </div>
      </main>
    );
  }

  const user = users[0];

  const totalBlogs = await db.post.count({
    where: {
      user_id: user.id,
    },
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
  });

  const blogs = await db.post.findMany({
    where: {
      user_id: user.id,
    },
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
    take: 9,
    skip: offset,
  });

  if (blogs.length == 0) return redirect(`/u/${params.username}`);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col bg-white">
        <div className="my-5 flex flex-col items-center justify-evenly gap-y-12 pb-6 md:flex-row md:flex-wrap">
          {blogs?.map(async (blog, index) => {
            return (
              <Card
                key={index}
                title={blog.title}
                author={params.username}
                content={blog.content}
                date={blog.created_at}
                link={`/u/${params.username}/b/${blog.slug}`}
              />
            );
          })}
        </div>

        <div className="my-8 text-center flex flex-grow justify-center">
          <Link href={`/u/${params.username}/page/${page - 1}`}>
            <Button text={`Page ${page - 1}`} />
          </Link>
          {totalBlogs - offset > 9 && (
            <Link href={`/u/${params.username}/page/${page + 1}`}>
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
