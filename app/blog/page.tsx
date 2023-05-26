import NavbarWithBack from "@/components/server/navbarWithBack";
import NewBlogForm from "@/components/client/NewBlogForm";
import Footer from "@/components/server/footer";

export default function Blog() {
  return (
    <main className="bg-slate-800">
      <div className="flex flex-grow flex-col justify-center text-center">
        <NavbarWithBack />
        <NewBlogForm />
        <Footer />
      </div>
    </main>
  );
}
