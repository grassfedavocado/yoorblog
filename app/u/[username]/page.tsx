import { clerkClient } from "@clerk/nextjs";
import Link from "next/link";
import db from "@/utils/database";
import Card from "@/components/server/card";
import Button from "@/components/client/button";

type Props = {
    params: {
        username: string;
        page?: string;
    };
};

export default async function Blogs({ params }: Props) {
    const users = await clerkClient.users.getUserList({
        username: [params.username],
    });

    if (users.length == 0) {
        return (
            <main className="flex min-h-screen flex-col">
                <div className="w-full my-6 flex flex-col flex-grow items-center justify-center md:flex-row md:flex-wrap">
                    <h1 className="text-4xl font-bold">No User Found!</h1>
                </div>
            </main>
        );
    }

    const user = users[0];

    const totalBlogs = await db.post.count({
        where: {
            user_id: user.id,
        },
        orderBy: [
            {
                created_at: "desc",
            },
            { id: "desc" },
        ],
    });

    const blogs = await db.post.findMany({
        where: {
            user_id: user.id,
        },
        orderBy: [
            {
                created_at: "desc",
            },
            { id: "desc" },
        ],
        take: 9,
    });

    return (
        <main className="flex min-h-screen flex-col">
            <div className="w-full my-6 flex flex-col flex-grow justify-center items-center md:flex-row md:flex-wrap">
                {blogs?.map((blog, index) => {
                    return (
                        <Card
                            key={index}
                            title={blog.title}
                            author={user.username}
                            content={blog.content}
                            date={blog.created_at}
                            link={`/u/${user.username}/b/${blog.slug}`}
                        />
                    );
                })}
            </div>
            <div className="my-8 text-center">
                <Link href={`/u/${user.username}/page/2`}>
                    <Button text="View More" disabled={totalBlogs < 9 ? true : false} />
                </Link>
            </div>
        </main>
    );
}
