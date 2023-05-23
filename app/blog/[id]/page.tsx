import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";
import NavbarWithBack from "@/components/server/navbarWithBack";
import Footer from "@/components/server/footer";

type Props = {
  params: {
    id: number;
  };
};

export default async function Blog({ params }: Props) {
  const user = await currentUser();

  if (!user) {
    return (
      <h1 className="text-5xl">
        You do not have access to this resource. Please login and try again.
      </h1>
    );
  }

  const post = await db.post.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  const paragraphs = post?.content.split(/\r?\n/).filter((p) => p != "");

  return (
    <div className="flex flex-col h-max items-center bg-slate-800 text-white md:h-screen">
      <div className="h-full">
        <NavbarWithBack />
        <div className="flex flex-col items-center mb-8">
          <p className="text-xl font-bold text-teal-500 md:text-4xl">Blog Post {post?.title}</p>
          {paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="mx-8 text-sm mt-12 indent-10 text-white-500 md:indent-32 md:mx-72 md:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
