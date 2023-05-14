"use client";
import { useEffect, useState } from "react";
import Button from "@/components/client/button";
import Input from "@/components/client/input";
import { User } from "@prisma/client";

export default function Users() {
  const [users, setUsers] = useState<User[] | undefined>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  async function get_users() {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();

      setUsers(data.results);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async function add_user() {
    if ([username, email].includes("")) {
      return alert("Your Username or Email is incorrect!");
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username: username, email: email }),
      });

      const data = await res.json();

      if (data.successful) {
        setUsername("");
        setEmail("");

        await get_users();

        return alert("User was created successfully!");
      }

      alert("User was not created. Error.");
    } catch (e: any) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    get_users();
  }, []);

  return (
    <div className="my-5 flex flex-col items-center">
      <div className="flex my-5">
        <Input value={username} placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />

        <Input value={email} placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />

        <Button text="Add User" color="red" onClick={() => add_user()} />
      </div>

      <h1 className="text-teal-500 my-6 text-6xl font-bold">Users</h1>

      <ul>
        {users?.length == 0 && <h4 className="text-3xl">No Users Found.</h4>}

        {!users ? (
          <h1 className="text-3xl text-teal-500">Loading</h1>
        ) : (
          users.map((user, index) => (
            <li key={index}>
              User {index + 1} - Username: <span className="text-teal-500">{user.username}</span>, Email:{" "}
              <span className="text-teal-500">{user.email}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
