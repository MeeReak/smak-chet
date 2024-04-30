import { Navbar, SecondNarbar } from "@/components"
import CardContext from "@/contexts/CardContext"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import ".././globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Smakchet</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        <CardContext>{children}</CardContext>
        <SecondNarbar />
      </body>
    </html>
  );
}