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

  // Define routes where Navbar should be hidden
  const routesToHideNavbar = ['/login', '/signup', '/forget' , '/aboutus'];

  // Determine if current page is an eventDetail page (/detail/{id})
  //const isEventDetailPage = pathname.startsWith('/detail');

  // Determine if Navbar should be hidden based on current route
  const hideNavbar = routesToHideNavbar.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>SmakChet</title>
      </head>
      <body className={inter.className}>
        {!hideNavbar && <Navbar />}
        <CardContext>{children}</CardContext>
        {!hideNavbar && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;
