import Button from "../client/button";
import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const session = auth();

  return (
    <div className="flex flex-col justify-center border-b-8 border-b-white px-5 md:flex-row md:justify-between">
      <div className="my-8">
        <h1 className="py-1 text-4xl font-bold text-teal-500 text-center md:text-start">Yoorblog</h1>
      </div>
      {session?.userId ? (
        <div className="mb-6 flex justify-center md:m-10">
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="mb-3 md:my-4 text-center">
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
