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
    <main className="flex h-max flex-col bg-slate-800 text-white md:h-screen">
      <div className="h-max md:h-full">
        <NavbarWithBack />
        <p className="mb-6 text-center text-lg font-bold text-teal-500 md:mb-12 md:text-4xl">
          Blog Post {post?.title}
        </p>

        <div className="text-md mb-6 text-center md:text-2xl">
          <p className="text-white-500 font-bold">
            Author:{" "}
            <span className="inline font-normal text-teal-500">{user?.username ?? "N/A"}</span>
          </p>
        </div>

        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="text-white-500 mx-10 mb-12 indent-10 text-sm md:mx-44 md:indent-32 md:text-xl"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <Footer />
    </main>
  );
}
