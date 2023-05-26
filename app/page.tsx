import Navbar from "@/components/server/navbar";
import Body from "@/components/server/body";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-slate-800">
      <Navbar />
      {/* @ts-expect-error Async Server Component */}
      <Body />
    </main>
  );
}
