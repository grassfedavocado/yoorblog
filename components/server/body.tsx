import Link from "next/link";
import Button from "../client/button";

export default function Body() {
  return (
    <div className="h-full bg-slate-800 pb-5 text-center">
      <div className="m-12">
        <Link href="/blog/">
          <Button text="Create Blog" />
        </Link>
      </div>
    </div>
  );
}
