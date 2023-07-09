import db from "@/utils/database";
import Card from "./card";

export default async function Blogs() {
  const blogs = await db.post.findMany({
    orderBy: [
      {
        created_at: "desc",
      },
      { id: "desc" },
    ],
    take: 9,
  });

  return (
    <div className="my-5 flex w-full flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap md:items-start">
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
  );
}
