import NavbarWithBack from "@/components/server/navbarWithBack";
import NewBlogForm from "@/components/client/NewBlogForm";
import Footer from "@/components/server/footer";

export default function Blog() {
  return (
    <div className="flex h-max flex-col items-center bg-slate-800">
      <NavbarWithBack />
      <NewBlogForm />
      <Footer />
    </div>
  );
}
