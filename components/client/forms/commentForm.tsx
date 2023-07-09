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
    if (comment.length < 12) {
      return alert("This comment seems to be too short.");
    }

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ comment: comment, post_id: props.post_id }),
      });

      const data = await res.json();

      if (data == "ok") {
        window.location.reload();
      }
    } catch (err: any) {
      console.log(err.message);
      alert("There was an error in submitting your comment. Please try again later.");
    }
  }

  return (
    <div className="mb-6 w-full md:w-5/12">
      <div className="w-full h-56">
        <Textarea
          placeholder="Enter your comment here..."
          onChange={({ target }) => setComment(target.value)}
        />
      </div>

      <Button
        text="Submit"
        onClick={submit}
        disabled={comment.length > 12 ? false : true}
      />
    </div>
  );
}
