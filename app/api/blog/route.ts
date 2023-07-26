import { NextResponse } from "next/server";
import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";

type PostData = {
  title: string;
  content: string;
  slug: string;
};

export async function POST(req: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json("You do not have access to this resource.");
  }

  const { title, content, slug } = (await req.json()) as PostData;

  try {
    await db.post.create({
      data: {
        title: title,
        content: content,
        published: true,
        slug: slug,
        user_id: user.id,
      },
    });

    return NextResponse.json("ok");
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json("bad");
  }
}
