import Link from "next/link";
import Button from "../client/button";

type Props = {
  title: string;
  author: string | null;
  link: string;
  date: Date;
  content: string;
};

export default function Card(props: Props) {
  const split = props.date.toDateString().split(" ");
  const date = `${split[0]} ${split[1]} ${split[2]}, ${split[3]}`;

  return (
    <div className="m-4 h-fit w-80 rounded-2xl border border-black bg-white text-center shadow-md shadow-blue-500 md:w-3/12">
      <div className="m-6">
        <p className="text-lg font-bold md:text-3xl">{props.title}</p>
        <p className="text-md mt-3 md:text-xl">
          Author:{" "}
          <Link href={`/u/${props.author}`}>
            <span className="font-normal text-blue-500 hover:text-blue-400">
              {props.author}
            </span>
          </Link>
        </p>
        <p className="mt-2">{date}</p>

        <div className="my-5 max-w-xl border-t-4 border-t-blue-500"></div>

        <div className="my-5 break-words">
          <p>{props.content.slice(0, 250)}...</p>
        </div>

        <Link href={props.link}>
          <Button text="Read" />
        </Link>
      </div>
    </div>
  );
}
