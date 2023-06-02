"use client";
import { useEffect, useState, useRef } from "react";
import { Post } from "@prisma/client";
import { get } from "../../utils/api";
import Card from "../server/Card";
import Pagination from "./pagination";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [offset, setOffset] = useState(0);

  const maxOffset = useRef(0);

  async function get_blogs(offsetPage?: number) {
    try {
      const data = (await get("blog", { offset: offsetPage })) as ApiResponse<Post[]>;

      maxOffset.current = offset * 9 - 9;

      setBlogs(data.results);
    } catch (err: any) {
      console.log(err.message);
      alert("There was an error in getting a list of blogs.");
    }
  }

  useEffect(() => {
    get_blogs(offset);
  }, []);

  useEffect(() => {
    if (offset > maxOffset.current) {
      setOffset(0);
    }
  }, [maxOffset]);

  return (
    <div className="my-5 flex w-full flex-col items-center justify-center pb-6 md:flex-row md:flex-wrap md:items-start">
      <Pagination
        offset={offset}
        maxOffset={maxOffset.current}
        limit={9}
      />

      {blogs?.map((post, index) => {
        return (
          <Card
            key={index}
            title={post.title}
            author={post.author}
            link={`/blog/${post.id}`}
          />
        );
      })}

      <Pagination
        offset={offset}
        maxOffset={maxOffset.current}
        limit={9}
      />
    </div>
  );
}
