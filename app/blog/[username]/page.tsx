import db from "@/utils/database";
import Card from "@/components/server/Card";

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
    orderBy: {
      created_at: "desc",
    },
    take: 20,
  });

  return (
    <div className="my-5 flex w-full flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap md:items-start">
      {blogs?.map((blog, index) => {
        return (
          <Card
            key={index}
            title={blog.title}
            author={blog.author}
            link={`/blog/${blog.author}/${blog.slug}`}
          />
        );
      })}
    </div>
  );
}
