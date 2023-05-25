import Link from "next/link";
import Button from "../client/button";
import { auth } from "@clerk/nextjs";
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
    <div className="h-full flex flex-col bg-slate-800 pb-8 text-center">
      {session?.userId && (
        <div className="m-8">
          <Link href="/blog/">
            <Button text="Create Blog" />
          </Link>
        </div>
      )}

      <div className="flex flex-wrap justify-center md:justify-start">
        {blogs?.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            link={`/blog/${post.id}`}
          />
        ))}
      </div>
    </div>
  );
}
