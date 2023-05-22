"use client";
import { useState } from "react";
import Input from "@/components/client/input";
import Textarea from "@/components/client/textarea";
import Button from "./button";

export default function NewBlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const REQUEST_DATA = {
    title: title,
    content: content,
  };

  async function submit() {
    if ([title, content].includes("")) {
      return alert("You are missing a title or body content for your post.");
    }

    if (content.length < 255) {
      return alert(
        "Your body content seems to be very short. We need to know more about what your title suggested."
      );
    }

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify(REQUEST_DATA),
      });

      const data = await res.text();

      if (data == "ok") {
        return alert("Your blog post has been submitted!");
      }

      alert("There was some sort of error in creating your blog post. Please try again later.");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1 className="mb-10 text-5xl font-bold text-teal-500 md:text-6xl">New Blog</h1>
      <Input
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        placeholder="Enter Blog Title..."
      />
      <Textarea
        value={content}
        onChange={({ target }) => setContent(target.value)}
        placeholder="Enter your blogs content here..."
      />
      <Button
        text="Submit"
        onClick={() => submit()}
      />
      <div className="mb-5"></div>
    </div>
  );
}
