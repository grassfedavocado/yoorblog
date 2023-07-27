import { auth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Button from "../client/button";

export default function Navbar() {
  const session = auth();

  return (
    <div className="flex flex-col justify-between items-center border-b-2 border-b-black px-5 md:flex-row">
      <div className="mt-8 mb-4 md:mb-8">
        <Link href="/">
          <h1 className="py-1 text-center text-4xl font-semibold md:text-start">
            Yoor<span className="text-blue-500">blog</span>
          </h1>
        </Link>
      </div>
      <div className="my-4">
        {session?.userId && (
          <div className="my-4">
            <Link href="/blog/create">
              <Button text="Create Blog" />
            </Link>
          </div>
        )}
      </div>
      {session?.userId ? (
        <div className="mt-5 mb-8 md:m-10">
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="mb-3 text-center md:my-4">
          <Link href="/register">
            <Button text="Signup" />
          </Link>
          <Link href="/login">
            <Button text="Login" />
          </Link>
        </div>
      )}
    </div>
  );
}
