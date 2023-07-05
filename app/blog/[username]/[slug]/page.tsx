import Link from "next/link";
import db from "@/utils/database";
import { auth } from "@clerk/nextjs/server";
import NavbarWithBack from "@/components/server/navbarWithBack";
import Footer from "@/components/server/footer";
import CommentForm from "./CommentForm";
import Button from "@/components/client/button";

type Props = {
  params: {
    author: string;
    slug: string;
  };
};

export default async function Blog({ params }: Props) {
  const session = auth();

  const post = await db.post.findFirst({
    where: {
      author: params.author,
      slug: params.slug,
    },
  });

  const paragraphs = post?.content.split(/\r?\n/).filter((p) => p != "");

  const comments = await db.comment.findMany({
    where: {
      post_id: post?.id,
    },
  });

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavbarWithBack />
      <div className="flex flex-grow flex-col text-center">
        <p className="mb-6 text-lg font-bold md:mb-12 md:text-4xl">{post?.title}</p>

        <div className="text-md mb-6 md:text-2xl">
          <p className="font-bold">
            Author: <span className="inline font-normal text-blue-500">{post?.author}</span>
          </p>
        </div>

        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="mx-10 mb-8 text-start indent-10 text-sm md:mx-44 md:indent-32 md:text-xl"
          >
            {paragraph}
          </p>
        ))}

        <div className="mb-8 w-full border-t-4 border-black"></div>

        <div className="mb-8 flex flex-grow flex-col items-center">
          <p className="mb-3 text-3xl font-bold">COMMENTS</p>

          {session.userId && post?.id ? (
            <CommentForm post_id={post.id} />
          ) : (
            <div className="my-6">
              <p>You need to be logged to comment!</p>

              <Link href="/register">
                <Button text="Signup" />
              </Link>
              <Link href="/login">
                <Button text="Login" />
              </Link>
            </div>
          )}

          {comments?.map((comment, index) => {
            return (
              <p
                key={index}
                className="w-fit bg-black rounded-2xl px-5 py-3 text-center text-white"
              >
                {comment.text} - Author: {comment.author}
              </p>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
