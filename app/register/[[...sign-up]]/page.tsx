import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <div className="flex h-screen flex-grow">
      <div className="flex flex-grow flex-col items-center justify-center">
        <SignUp />
      </div>
    </div>
  );
}
