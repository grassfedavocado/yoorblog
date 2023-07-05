import { SignUp } from "@clerk/nextjs";
import NavbarWithBack from "@/components/server/navbarWithBack";

export default function Register() {
  return (
    <div className="flex h-screen flex-grow">
      <div className="mt-32 flex flex-grow flex-col items-center justify-center">
        <SignUp />
        <NavbarWithBack />
      </div>
    </div>
  );
}
