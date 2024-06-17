import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dax's Website",
  description: "Get to know me and what I'm doing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="header">Dax Schoof</h1>
        <div className="mainPage">{children}</div>
        <NavigationBar />
      </body>
    </html>
  );
}
