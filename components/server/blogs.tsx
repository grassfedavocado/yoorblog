import { clerkClient } from "@clerk/nextjs";
import db from "@/utils/database";
import Card from "./card";

interface Props {
  params: {
    page?: string;
    username?: string;
  };
}

export default async function Blogs({ params }: Props) {
  const blogs = await db.post.findMany({
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
    take: 9,
  });

  return (
    <div className="my-5 flex w-full flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap md:items-start">
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
  );
}
