import db from "@/utils/database";
import { clerkClient } from "@clerk/nextjs/server";
import NavbarWithBack from "@/components/server/navbarWithBack";
import { User } from "@clerk/nextjs/dist/server";
import Footer from "@/components/server/footer";

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
    <main className="flex min-h-screen flex-col bg-slate-800">
      <NavbarWithBack />
      <div className="flex flex-grow flex-col text-center text-white">
        <p className="mb-6 text-lg font-bold text-teal-500 md:mb-12 md:text-4xl">
          Blog Post {post?.title}
        </p>

        <div className="text-md mb-6 md:text-2xl">
          <p className="text-white-500 font-bold">
            Author:{" "}
            <span className="inline font-normal text-teal-500">{user?.username ?? "N/A"}</span>
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
      </div>

      <Footer />
    </main>
  );
}
