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
  const hideRoutes = ['/login', '/signup', '/forget', '/roleSelection'];
  const shouldHideNavbar = hideRoutes.includes(pathname);
  const shouldHideFooter = shouldHideNavbar || pathname === '/profile';
  return (
    <html lang="en">
      <head>
        <title>SmakChet</title>
      </head>
      <body className={inter.className}>
        {shouldHideNavbar ? null : <Navbar />}
        <CardContext>{children}</CardContext>
        {shouldHideFooter ? null : <Footer />}
      </body>
    </html>
  );
}
