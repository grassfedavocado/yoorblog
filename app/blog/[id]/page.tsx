import db from "@/utils/database";
import NavbarWithBack from "@/components/server/navbarWithBack";
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

  const paragraphs = post?.content.split(/\r?\n/).filter((p) => p != "");

  return (
    <main className="h-max flex flex-col bg-slate-800 text-white md:h-screen">
      <div className="h-full">
        <NavbarWithBack />
        <p className="mb-6 text-lg text-center font-bold text-teal-500 md:text-4xl md:mb-12">
          Blog Post {post?.title}
        </p>

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
