import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutorial",
  description: "Build some stuffs with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="text-2xl text-primary">this is navbar</nav>
        {children}</body>
    </html>
  );
}
