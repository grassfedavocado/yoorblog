import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";

type GetData = {
  offset?: number;
  author?: string;
};

type PostData = {
  title: string;
  content: string;
};

type QueryData = {
  where: {
    published: boolean;
    author?: string;
  };
};

export async function GET(req: NextApiRequest) {
  const data = req.query as GetData;
  const offset = data?.offset ?? 0;

  const query: QueryData = {
    where: {
      published: true,
    },
  };

  if (data?.author) {
    query.where.author = data.author;
  }

  const [blogs, count] = await Promise.all([db.post.findMany(query), db.post.count(query)]);

  return NextResponse.json({ rows: count, results: blogs });
}

export async function POST(req: NextApiRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "You do not have access to this resource." });
  }

  const { title, content } = req.query as PostData;

  try {
    await db.post.create({
      data: {
        title: title,
        content: content,
        published: true,
        user_id: user.id,
        author: user?.username ?? "N/A",
      },
    });

    return NextResponse.json("ok");
  } catch (err: any) {
    return NextResponse.json("bad");
  }
}
