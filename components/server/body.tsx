import Link from "next/link";
import Button from "../client/button";
import { auth } from "@clerk/nextjs";

export default function Body() {
  const session = auth();

  return (
    <div className="h-full bg-slate-800 pb-5 text-center">
      {session?.userId && (
        <div className="m-12">
          <Link href="/blog/">
            <Button text="Create Blog" />
          </Link>
        </div>
      )}
    </div>
  );
}
