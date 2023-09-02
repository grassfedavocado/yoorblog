import Link from "next/link";
import { clerkClient } from "@clerk/nextjs";
import db from "@/utils/database";
import Card from "@/components/server/card";
import Button from "@/components/client/button";
import { Fragment } from "react";
import BlogsWrapper from "@/components/server/blogsWrapper";

export default async function Home() {
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
  });

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col bg-white">
        <BlogsWrapper>
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
        </BlogsWrapper>

        <div className="my-8 text-center">
          <Link href="/page/2">
            <Button text="View More" disabled={totalBlogs < 9 ? true : false} />
          </Link>
        </div>
      </div>
    </main>
  );
}
