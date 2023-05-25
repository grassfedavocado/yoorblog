import Link from "next/link";
import Button from "../client/button";

type Props = {
  title: string;
  content?: string;
  link: string;
};

export default function Card({ title, content, link }: Props) {
  return (
    <div className="m-5 h-fit w-80 rounded-xl bg-white shadow-md shadow-teal-500 md:w-fit">
      <div className="m-6">
        <p className="text-lg md:text-3xl">{title}</p>

        <div className="my-5 max-w-xl border-t-4 border-t-teal-500"></div>
        <Link href={link}>
          <Button text="Read" />
        </Link>
      </div>
    </div>
  );
}
