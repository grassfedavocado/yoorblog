import Navbar from "@/components/server/navbar";
import Footer from "@/components/server/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-800 text-white">
      <Navbar />
      <div className="min-h-screen mx-10 px-10">
        <p className="text-lg">
          Our blogging software is a unique platform that combines the best features of WordPress and Drupal but instead of PHP, we use TypeScript.
          This makes our software more efficient and faster than other blogging platforms. Our software is designed to be user-friendly and easy to
          use, even for those who are not tech-savvy.
        </p>

        <br />

        <p className="text-lg">
          One of the key features of our software is custom theming. We understand that every blogger has their own unique style and preferences when
          it comes to the look and feel of their blog. That’s why we offer custom theming options that allow you to create a blog that truly reflects
          your personality and style. Our custom theming options are easy to use and require no coding knowledge.
        </p>

        <br />

        <p className="text-lg">
          Our software also offers a range of customization options that allow you to create a blog that truly reflects your personality and style.
          You can choose from a wide range of fonts, colors, and layouts to create a unique look for your blog. We also offer a range of plugins and
          widgets that allow you to add additional functionality to your blog.
        </p>
      </div>
      <Footer />
    </main>
  );
}
