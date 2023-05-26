import { auth, clerkClient } from "@clerk/nextjs";
import Link from "next/link";
import Button from "../client/button";
import Card from "./Card";
import db from "@/utils/database";

async function get_blogs() {
  const query = {
    where: {
      published: true,
    },
  };

  return await Promise.all([db.post.findMany(query), db.post.count(query)]);
}

export default async function Body() {
  const session = auth();
  const [blogs, count] = await get_blogs();

  return (
    <div className="flex flex-grow flex-col items-center justify-start bg-slate-800">
      {session?.userId && (
        <div className="m-8">
          <Link href="/blog/">
            <Button text="Create Blog" />
          </Link>
        </div>
      )}

      <div className="my-5 flex w-full flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap md:items-start">
        {blogs?.map(async (post, index) => {
          const author = await clerkClient.users.getUser(post.user_id);

          return (
            <Card
              key={index}
              title={post.title}
              author={author?.username}
              link={`/blog/${post.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
