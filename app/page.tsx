import Navbar from "@/components/server/navbar";
import Body from "@/components/server/body";
import Footer from "@/components/server/footer";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-slate-800">
      <Navbar />
      <Body />
      <Footer />
    </main>
  );
}
