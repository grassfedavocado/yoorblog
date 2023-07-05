"use client";
import { useState } from "react";
import Button from "@/components/client/button";
import Textarea from "@/components/client/textarea";

type Props = {
  post_id: number;
};

export default function CommentForm(props: Props) {
  const [comment, setComment] = useState("");

  async function submit() {
    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ comment: comment, post_id: props.post_id }),
      });

      const data = await res.json();

      console.log(data);
    } catch (err: any) {
      console.log(err.message);
      alert("There was an error in submitting your comment. Please try again later.");
    }
  }

  return (
    <div className="mb-12 w-full h-56 md:w-6/12">
      <Textarea
        placeholder="Enter your comment here..."
        onChange={({ target }) => setComment(target.value)}
      />

      <Button
        text="Submit"
        onClick={submit}
      />
    </div>
  );
}
