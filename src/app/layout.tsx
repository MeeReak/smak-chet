"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { usePathname } from "next/navigation";
import CardContext from "@/contexts/CardContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const routeToHide = ["/login", "/signup", "/forget", "/roleSelection","/favorite"];
  const hideNavbarFooter = routeToHide.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>SmakChet</title>
      </head>
      <body className={inter.className}>
        {hideNavbarFooter ? null : <Navbar />}
        <CardContext>{children}</CardContext>
        {hideNavbarFooter ? null : <Footer />}
      </body>
    </html>
  );
}
