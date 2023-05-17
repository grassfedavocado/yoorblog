import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center text-center bg-slate-800">
      <SignUp />
    </div>
  );
}
