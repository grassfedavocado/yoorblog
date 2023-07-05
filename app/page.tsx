import Navbar from "@/components/server/navbar";
import Body from "@/components/server/body";
import Footer from "@/components/server/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Body />
      <Footer />
    </main>
  );
}
