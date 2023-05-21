import { SignIn } from "@clerk/nextjs";
import NavbarWithBack from "@/components/server/navbarWithBack";

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-slate-800">
      <SignIn />
      <NavbarWithBack />
    </div>
  );
}
