import Link from "next/link";
import Button from "../client/button";

export default function NavbarWithBack() {
  return (
    <div className="m-5 flex flex-grow flex-col justify-center">
      <Link href="/">
        <Button text="Back" />
      </Link>
    </div>
  );
}
