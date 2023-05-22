import { Post } from "@prisma/client";
import db from "@/utils/database";
import { clerkClient } from "@clerk/nextjs";
import Link from "next/link";
import Button from "@/components/client/button";

interface NPost extends Post {
  author: string;
}

const query = {
  where: {
    published: true,
  },
};

export default async function Blogs() {
  const posts = (await db.post.findMany(query)) as NPost[];
  const count = await db.post.count(query);

  posts.map(async (post) => {
    const user = await clerkClient.users.getUser(post.user_id);

    post.author = `${user.firstName} ${user.lastName}`;
  });

  return (
    <div className="flex flex-wrap m-10 w-full h-screen">
      {posts.map((post, index) => (
        <div key={index}>
          <p className="text-3xl">{post.title}</p>
          <p className="text-xl">{post.author}</p>

          <Link href={`/blog/${post.id}`}>
            <Button text="Read" />
          </Link>
        </div>
      ))}
    </div>
  );
}
