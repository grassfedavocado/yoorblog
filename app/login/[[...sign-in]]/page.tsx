import { SignIn } from "@clerk/nextjs";
import NavbarWithBack from "@/components/server/navbarWithBack";

export default function Login() {
  return (
    <div className="flex h-screen flex-grow bg-slate-800">
      <div className="mt-32 flex flex-grow flex-col items-center justify-center">
        <SignIn />
        <NavbarWithBack />
      </div>
    </div>
  );
}
