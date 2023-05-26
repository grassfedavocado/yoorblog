import Link from "next/link";
import Button from "../client/button";

export default function NavbarWithBack() {
  return (
    <div className="m-12 flex flex-col text-center">
      <Link href="/">
        <Button text="Back" />
      </Link>
    </div>
  );
}
