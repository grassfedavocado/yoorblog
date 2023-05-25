import db from "@/utils/database";
import { clerkClient } from "@clerk/nextjs/server";
import NavbarWithBack from "@/components/server/navbarWithBack";
import Footer from "@/components/server/footer";
import { User } from "@clerk/nextjs/dist/server";

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

  let user: User | undefined;

  if (post) {
    user = await clerkClient.users.getUser(post.user_id);
  }

  const paragraphs = post?.content.split(/\r?\n/).filter((p) => p != "");

  return (
    <main className="h-max flex flex-col bg-slate-800 text-white md:h-screen">
      <div className="h-max md:h-full">
        <NavbarWithBack />
        <p className="mb-6 text-lg text-center font-bold text-teal-500 md:text-4xl md:mb-12">
          Blog Post {post?.title}
        </p>

        <div className="text-center text-md mb-6 md:text-2xl">
          <p className="text-white-500 font-bold">
            Author:{" "}
            <span className="text-teal-500 font-normal inline">{user?.username ?? "N/A"}</span>
          </p>
        </div>

        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="mb-12 mx-10 text-sm indent-10 text-white-500 md:indent-32 md:text-xl md:mx-44"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <Footer />
    </main>
  );
}
