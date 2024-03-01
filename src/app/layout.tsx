import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import CardContext from "@/contexts/CardContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smakchet",
  description: "SmakChet is Cambodia's Volunteer seeking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CardContext>
          {children}
        </CardContext>
        <Footer />

      </body>
    </html>
  );
}
