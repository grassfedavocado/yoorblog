import { NextResponse } from "next/server";
import db from "@/utils/database";
import { currentUser } from "@clerk/nextjs";

type PostData = {
  comment: string;
  post_id: string;
};

export async function POST(req: Request) {
  const user = await currentUser();
  const { comment, post_id } = (await req.json()) as PostData;

  try {
    await db.comment.create({
      data: {
        text: comment,
        user_id: user?.id ?? "",
        author: user?.username ?? "N/A",
        post_id: parseInt(post_id),
      },
    });

    return NextResponse.json("ok");
  } catch (err: any) {
    return NextResponse.json("bad");
  }
}
