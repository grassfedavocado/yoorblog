import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center text-center bg-slate-800">
      <SignIn />
    </div>
  );
}
