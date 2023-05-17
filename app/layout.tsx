import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Yoorblog | Create Blogs",
  description:
    "Yoorblog is a blog site that allows you to have your own personal blog with custom themes provided by the user community and premium themes from us. Our software is completely open source, so you may take this and use it as your own.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
