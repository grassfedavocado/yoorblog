"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import onMount from "../hooks/onMount";
import Input from "@/components/client/input";
import Textarea from "@/components/client/textarea";
import Button from "../button";

export default function BlogForm() {
  const mounted = onMount();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [slugAvailable, setSlugAvailable] = useState(false);
  const [slugStatus, setSlugStatus] = useState({
    status: "Invalid Slug",
    color: "text-red-500",
  });

  const parsedSlug = slug.split(" ").join("-").toLowerCase();

  const { push } = useRouter();

  let timer: any;

  const REQUEST_DATA = {
    title: title,
    content: content,
    slug: parsedSlug,
  };

  async function check_slug_availability() {
    try {
      const res = await fetch("/api/slug", {
        method: "POST",
        body: JSON.stringify({ slug: slug }),
      });

      const data = await res.json();

      if (data == 0 || slug.length > 0) {
        setSlugAvailable(true);
        setSlugStatus({
          status: "Valid Slug",
          color: "text-green-500",
        });
      }

      if (data == 1 || slug.length == 0 || slug.charAt(slug.length - 1) == " ") {
        setSlugAvailable(false);
        setSlugStatus({
          status: "Invalid Slug",
          color: "text-red-500",
        });
      }
    } catch {
      alert("There was an error in checking for slug availabilty. Please try again later.");
    }
  }

  async function submit() {
    if ([title, content].includes("")) {
      return alert("You are missing a title or body content for your post.");
    }

    if (!slugAvailable) {
      return alert("You do not have a valid slug!");
    }

    if (title.length > 32) {
      return alert("Your title is too long. Try moving some of this into the body down below.");
    }

    if (content.length < 300) {
      return alert(
        "Your body content seems to be very short. We need to know more about what your title suggested."
      );
    }

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify(REQUEST_DATA),
      });

      const data = await res.json();

      if (data === "ok") {
        push("/");
        return alert("Your blog post has been submitted!");
      }

      alert("There was some sort of error in creating your blog post. Please try again later.");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if (mounted) {
      check_slug_availability();
    }
  }, [slug]);

  return (
    <div className="flex h-screen flex-grow justify-center flex-col items-center py-5">
      <h1 className="mb-10 text-5xl font-bold md:text-6xl">New Blog</h1>
      <div className="w-full flex justify-center md:w-1/3">
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Enter Blog Title..."
        />
      </div>

      <div className="w-full flex flex-col items-center md:w-1/3">
        <Input
          onChange={({ target }) => {
            clearTimeout(timer);
            timer = setTimeout(() => setSlug(target.value), 350);
          }}
          placeholder="Enter Slug..."
        />

        <p>
          {" "}
          <span className="text-2xl font-bold">SLUG: </span>
          {parsedSlug}
        </p>

        <p className={slugStatus.color}>{slugStatus.status}</p>
      </div>

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
