import db from "./database";

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <main className="@container flex min-h-screen flex-col items-center p-24 bg-slate-900 text-white">
      <h1 className="@lg:text-5xl @md:text-2xl @sm:text-1xl text-teal-500 mb-16 font-bold">
        Yoorblog Blogging Application
      </h1>
      <p className="text-lg">Yoorblog is going to an alternative to websites like wordpress & medium.</p>
      <h3 className="text-teal-500 my-6 text-3xl font-bold">Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            User {index + 1} - Username: <span className="text-teal-500">{user.username}</span>, Email:{" "}
            <span className="text-teal-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
