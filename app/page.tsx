import Navbar from "@/components/server/navbar";
import Body from "@/components/server/body";
import Footer from "@/components/server/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-800 text-white">
      <Navbar />
      <Body />
      <Footer />
    </main>
  );
}
