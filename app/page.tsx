import Navbar from "@/components/server/navbar";
import Body from "@/components/server/body";
import Footer from "@/components/server/footer";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-slate-800">
      <Navbar />
      {/* @ts-expect-error Async Server Component */}
      <Body />
      <Footer />
    </main>
  );
}
