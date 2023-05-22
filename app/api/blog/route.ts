import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";

type PostData = {
  title: string;
  content: string;
};

export async function GET(req: NextRequest) {
  const query = {
    where: {
      published: true,
    },
  };

  const [blogs, count] = await Promise.all([db.post.findMany(query), db.post.count(query)]);

  return NextResponse.json({ rows: count, results: blogs });
}

export async function POST(req: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: "You do not have access to this resource." });
  }

  const { title, content } = (await req.json()) as PostData;

  try {
    await db.post.create({
      data: {
        title: title,
        content: content,
        published: true,
        user_id: user.id,
      },
    });

    return NextResponse.json("ok");
  } catch (err: any) {
    return NextResponse.json("bad");
  }
}
