import Link from "next/link";
import db from "@/utils/database";
import { auth } from "@clerk/nextjs/server";
import NavbarWithBack from "@/components/server/navbarWithBack";
import Footer from "@/components/server/footer";
import CommentForm from "../../../components/client/forms/commentForm";
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
    orderBy: {
      created_at: "desc",
    },
    take: 20,
  });

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavbarWithBack />
      <div className="flex flex-grow flex-col text-center">
        <p className="mb-6 text-3xl font-bold md:mb-12 md:text-5xl">{post?.title}</p>

        <div className="text-md mb-6 md:text-2xl">
          <Link href={`/${post?.author}`}>
            <p className="font-bold">
              Author: <span className="inline font-normal text-blue-500">{post?.author}</span>
            </p>
          </Link>
        </div>

        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="mx-10 mb-8 text-start indent-10 text-lg md:mx-44 md:indent-32 md:text-2xl"
          >
            {paragraph}
          </p>
        ))}

        <div className="mb-8 w-full border-t-4 border-black"></div>

        <div className="mb-12 flex flex-grow flex-col items-center">
          <p className="mb-3 text-4xl font-bold">Comments</p>
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
          <div className="my-2 flex flex-col justify-center items-center">
            {comments?.map((comment, index) => {
              return (
                <div className="w-10/12 flex flex-col md:w-6/12">
                  <div className="flex justify-end mb-0">
                    <p
                      key={index}
                      className="rounded-2xl rounded-r-none bg-slate-100 mt-8 px-5 py-3"
                    >
                      {comment.text}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <p className="p-3">
                      Author:{" "}
                      <Link href={`/${post?.author}`}>
                        <span className="text-blue-500">{comment.author}</span>
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
