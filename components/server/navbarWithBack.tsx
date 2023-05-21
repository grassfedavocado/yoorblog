import Link from "next/link";
import Button from "../client/button";

export default function NavbarWithBack() {
  return (
    <div className="m-10">
      <Link href="/">
        <Button text="Back" />
      </Link>
    </div>
  );
}
