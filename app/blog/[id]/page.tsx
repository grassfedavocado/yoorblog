import db from "@/utils/database";
import { clerkClient } from "@clerk/nextjs/server";
import NavbarWithBack from "@/components/server/navbarWithBack";
import Footer from "@/components/server/footer";
import { comment } from "postcss";

type Props = {
  params: {
    id: number;
  };
};

export default async function Blog({ params }: Props) {
  const post = await db.post.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  const paragraphs = post?.content.split(/\r?\n/).filter((p) => p != "");

  const comments = await db.comment.findMany({
    where: {
      postId: post?.id,
    },
  });

  return (
    <main className="flex min-h-screen flex-col bg-slate-800">
      <NavbarWithBack />
      <div className="flex flex-grow flex-col text-center text-white">
        <p className="mb-6 text-lg font-bold text-teal-500 md:mb-12 md:text-4xl">{post?.title}</p>

        <div className="text-md mb-6 md:text-2xl">
          <p className="text-white-500 font-bold">
            Author: <span className="inline font-normal text-teal-500">{post?.author}</span>
          </p>
        </div>

        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="text-white-500 mx-10 mb-8 text-start indent-10 text-sm md:mx-44 md:indent-32 md:text-xl"
          >
            {paragraph}
          </p>
        ))}

        <div className="mb-8 w-full border-t-4 border-white"></div>

        <div className="mb-8 flex flex-grow flex-col items-center">
          <p className="mb-3 text-3xl font-bold">COMMENTS</p>
          {comments?.map((comment, index) => {
            return (
              <p
                key={index}
                className="w-fit bg-white px-5 py-3 text-center text-black"
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
