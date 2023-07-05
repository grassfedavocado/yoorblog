import { NextResponse } from "next/server";
import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";

type PostData = {
  slug: string;
};

export async function POST(req: Request) {
  const user = await currentUser();

  if (!user?.username) {
    return NextResponse.json({ message: "You do not have access to this resource." });
  }

  const { slug } = (await req.json()) as PostData;

  try {
    const row = await db.post.findFirst({
      where: {
        author: user.username,
        slug: slug,
      },
    });

    if (row) {
      return NextResponse.json(1);
    }

    return NextResponse.json(0);
  } catch (err: any) {
    return NextResponse.json("bad");
  }
}
