import NavbarWithBack from "@/components/server/navbarWithBack";
import BlogForm from "@/components/client/forms/blogForm";
import Footer from "@/components/server/footer";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarWithBack />
      <BlogForm />
      <Footer />
    </main>
  );
}
