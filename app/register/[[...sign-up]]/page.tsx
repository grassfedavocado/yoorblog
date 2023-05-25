import { SignUp } from "@clerk/nextjs";
import NavbarWithBack from "@/components/server/navbarWithBack";

export default function Register() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 text-center">
      <SignUp />
      <NavbarWithBack />
    </div>
  );
}
