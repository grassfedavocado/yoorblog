import NavbarWithBack from "@/components/server/navbarWithBack";
import NewBlogForm from "@/components/client/NewBlogForm";

export default function Blog() {
  return (
    <div className="flex h-max flex-col items-center bg-slate-800">
      <NavbarWithBack />
      <NewBlogForm />
    </div>
  );
}
