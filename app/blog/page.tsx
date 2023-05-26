import NavbarWithBack from "@/components/server/navbarWithBack";
import NewBlogForm from "@/components/client/NewBlogForm";
import Footer from "@/components/server/footer";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-800">
      <NavbarWithBack />
      <NewBlogForm />
      <Footer />
    </main>
  );
}
