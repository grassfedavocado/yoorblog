import { auth } from "@clerk/nextjs";
import Link from "next/link";
import Button from "../client/button";
import Blogs from "../server/blogs";

export default function Body() {
  const session = auth();

  return (
    <div className="flex flex-grow flex-col items-center justify-start bg-white">
      {session?.userId && (
        <div className="m-8">
          <Link href="/blog/">
            <Button text="Create Blog" />
          </Link>
        </div>
      )}

      <Blogs />
    </div>
  );
}
