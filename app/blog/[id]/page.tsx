import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";
import NavbarWithBack from "@/components/server/navbarWithBack";

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
      id: params.id,
    },
  });

  return (
    <div className="h-screen flex flex-col items-center bg-slate-800 text-white">
      <NavbarWithBack />
      <div className="h-screen flex flex-col items-center">
        <p className="my-12 text-4xl text-teal-500">Blog Post {post?.title}</p>
      </div>
    </div>
  );
}
