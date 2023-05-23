import Link from "next/link";
import Button from "../client/button";
import { auth } from "@clerk/nextjs";
import Card from "./Card";

export default function Body() {
  const session = auth();

  return (
    <div className="h-full flex flex-col bg-slate-800 pb-5 text-center">
      {session?.userId && (
        <div className="m-12">
          <Link href="/blog/">
            <Button text="Create Blog" />
          </Link>
        </div>
      )}

      <div className="mx-12 flex flex-wrap justify-start">
        <Card
          title="Yoorblog Dev Update 1"
          content="This is a part of the content that I have fakely created inside of this portion. dsaddasdasdadkdshfiouewhfuinbdsuifhuweihfuehwfhdsfhjkhweiufhjdshfjkhweiufhdsjkfhuiweiuhf"
          link={`/blog/${1}`}
        />
      </div>
    </div>
  );
}
