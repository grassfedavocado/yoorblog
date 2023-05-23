import Link from "next/link";
import Button from "../client/button";

type Props = {
  title: string;
  content?: string;
  link: string;
};

export default function Card({ title, content, link }: Props) {
  return (
    <div className="max-w-sm rounded-xl bg-white shadow-md shadow-teal-500 md:max-w-md">
      <div className="px-3 py-7 md:px-12 md:py-16">
        <div className="mb-4 md:mb-12">
          <p className="text-3xl">{title}</p>
        </div>

        <div className="">
          <Link href={link}>
            <Button text="Read" />
          </Link>
        </div>
      </div>
    </div>
  );
}
