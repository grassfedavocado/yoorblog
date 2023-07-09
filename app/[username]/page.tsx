import Navbar from "@/components/server/navbar";
import Footer from "@/components/server/footer";
import db from "@/utils/database";
import Card from "@/components/server/card";

type Props = {
  params: {
    username: string;
  };
};

export default async function Blogs(props: Props) {
  const blogs = await db.post.findMany({
    where: {
      author: props.params.username,
    },
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
    take: 9,
  });

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="w-full my-6 flex flex-col flex-grow items-center justify-center md:flex-row md:flex-wrap">
        {blogs?.map((blog, index) => {
          return (
            <Card
              key={index}
              title={blog.title}
              author={blog.author}
              content={blog.content}
              date={blog.created_at}
              link={`/${blog.author}/${blog.slug}`}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
