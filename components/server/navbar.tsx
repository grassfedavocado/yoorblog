import Button from "../client/button";
import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const session = auth();

  return (
    <div className="flex flex-col justify-center border-b-4 border-b-black px-5 md:flex-row md:justify-between">
      <div className="my-8">
        <Link href="/">
          <h1 className="py-1 text-center text-4xl font-semibold md:text-start">
            Yoor<span className="text-blue-500">blog</span>
          </h1>
        </Link>
      </div>
      {session?.userId ? (
        <div className="mb-6 flex justify-center md:m-10">
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="mb-3 text-center md:my-4">
          <Link href="register">
            <Button text="Signup" />
          </Link>
          <Link href="login">
            <Button text="Login" />
          </Link>
        </div>
      )}
    </div>
  );
}
