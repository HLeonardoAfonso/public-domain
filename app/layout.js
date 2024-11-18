import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Public Domain Movies",
  description: "Find a Public Domain movie to watch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="p-16 flex flex-col gap-10">{children}</body>
    </html>
  );
}
