"use client";
import { Alef } from "next/font/google";
import Button from "./components/button";

export default function UserAdd() {
  return (
    <Button text="Alert Me" color="teal" onClick={() => alert("Hello World from Typescript in React on Next.js!")} />
  );
}
