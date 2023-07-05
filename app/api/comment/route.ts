import { NextResponse } from "next/server";
import db from "@/utils/database";
import { auth } from "@clerk/nextjs";

type PostData = {
  comment: string;
  post_id: string;
};

export async function POST(req: Request) {
  const session = auth();
  const { comment, post_id } = (await req.json()) as PostData;

  try {
    await db.comment.create({
      data: {
        text: comment,
        user_id: session?.user?.id ?? "",
        author: session?.user?.username ?? "N/A",
        post_id: parseInt(post_id),
      },
    });

    return NextResponse.json("ok");
  } catch (err: any) {
    return NextResponse.json("bad");
  }
}
