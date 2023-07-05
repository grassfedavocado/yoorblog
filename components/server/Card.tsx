import Link from "next/link";
import Button from "../client/button";

type Props = {
  title: string;
  author: string | null;
  link: string;
};

export default function Card({ title, author, link }: Props) {
  return (
    <div className="m-4 h-fit w-80 rounded-xl border-2 border-black bg-white text-center shadow-lg shadow-blue-500 md:w-3/12">
      <div className="m-6">
        <p className="text-lg md:text-3xl">{title}</p>
        <p className="text-md mt-3 font-bold md:text-xl">
          Author: <span className="font-normal">{author}</span>
        </p>

        <div className="my-5 max-w-xl border-t-4 border-t-blue-500"></div>

        <Link href={link}>
          <Button text="Read" />
        </Link>
      </div>
    </div>
  );
}
