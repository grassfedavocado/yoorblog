import Button from "../client/button";
import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const session = auth();

  console.log(session);

  return (
    <div className="flex justify-center border-b-8 border-b-white px-5 md:justify-between">
      <div className="my-8">
        <h1 className="py-1 text-4xl font-bold text-teal-500">Yoorblog</h1>
      </div>
      <div className="my-4 hidden md:block">
        <Link href="register">
          <Button text="Signup" />
        </Link>
        <Link href="login">
          <Button text="Login" />
        </Link>
      </div>
    </div>
  );
}
