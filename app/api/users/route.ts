import { NextRequest, NextResponse } from "next/server";
import db from "@/database";
import { User } from "@prisma/client";

export async function GET() {
  const users = await db.user.findMany({
    select: {
      username: true,
      email: true,
    },
  });

  return NextResponse.json({ results: users, rows: users.length });
}

export async function POST(req: NextRequest) {
  const data: User = await req.json();

  const user = await db.user.create({
    data: {
      username: data.username,
      email: data.email,
      name: "",
    },
  });

  if (user?.id) {
    return NextResponse.json({ successful: true });
  }

  return NextResponse.json({ successful: false });
}
