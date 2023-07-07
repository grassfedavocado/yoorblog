import Link from "next/link";
import Button from "../client/button";

type Props = {
  title: string;
  author: string | null;
  link: string;
  content: string;
};

export default function Card({ title, author, link, content }: Props) {
  return (
    <div className="m-4 h-fit w-80 rounded-2xl border border-black bg-white text-center shadow-md shadow-blue-500 md:w-3/12">
      <div className="m-6">
        <p className="text-lg font-bold md:text-3xl">{title}</p>
        <p className="text-md mt-3 md:text-xl">
          Author:{" "}
          <Link href={`/${author}`}>
            <span className="font-normal text-blue-500 hover:text-blue-400">{author}</span>
          </Link>
        </p>

        <div className="my-5 max-w-xl border-t-4 border-t-blue-500"></div>

        <div className="my-5">
          <p>{content.slice(0, 250)}...</p>
        </div>

        <Link href={link}>
          <Button text="Read" />
        </Link>
      </div>
    </div>
  );
}
