"use client"

import { Navbar, Footer } from '@/components';
import CardContext from '@/contexts/CardContext';
import { Inter } from 'next/font/google';
import { usePathname } from "next/navigation";
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const routeToHide = ["/login", "/signup", "/forget", "/roleSelection"];
  const hideNavbarFooter = routeToHide.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>SmakChet</title>
      </head>
      <body className={inter.className}>
        {!hideNavbarFooter && <Navbar />}
        <CardContext>{children}</CardContext>
        {!hideNavbarFooter && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;
