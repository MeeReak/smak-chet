"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const routeToHide = ["/login", "/signup", "/forget"];
  const hideNavbarFooter = routeToHide.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>SmakChet</title>
      </head>
      <body className={inter.className}>
        {hideNavbarFooter ? null : <Navbar />}
        {children}
        {hideNavbarFooter ? null : <Footer />}
      </body>
    </html>
  );
}
