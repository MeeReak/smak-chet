"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { InputSearch, Button, ButtonIcon, NotiDropdown } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalStorage } from "@/utils/localStorage";

const Navbar = () => {

  const [hideNavbar, setHideNavbar] = useState(false);

  const isLogin = getLocalStorage("isLogin") ? getLocalStorage("isLogin") : false;

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const isDetailRoute = window.location.pathname.startsWith("/detail/");
      const isSmallScreen = window.innerWidth < 640; // Adjust breakpoint as needed
      setHideNavbar(isDetailRoute && isSmallScreen);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={hideNavbar ? "hidden" : ""}>
      <div className="fixed top-0 left-0 right-0  m-auto z-50 bg-opacity-50 backdrop-blur-md bg-white">
        {" "}
        <div className="h-[80px] flex flex-row justify-between aligns-center max-[1030px]:p-5 max-[1030px]:pl-[10px] max-w-[1024px] m-auto ">
          <div className="flex flex-row justify-right items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                className="pb-2"
                src={"/assets/icons/smakchet-logo.svg"}
                alt="smakchet-logo"
                width={140}
                height={50}
              />
            </Link>

            {/* Conditionally Render Search Bar */}
            {pathname !== "/search" && pathname !== "/createpost" && (
              <Link href={"/search"}>
                <InputSearch />
              </Link>
            )}
          </div>
          <div className=" flex flex-row items-center ">
            {isLogin == false ? (
              <>
                <Link href="/login">
                  <Button
                    round="lg"
                    size="h4"
                    className="py-[13px] px-5  border-[1px] hover:bg-[#bdd8ff] hover:border-[#207BFF] hover:text-[#207BFF]"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/roleselection">
                  <Button
                    round="lg"
                    size="h4"
                    bgColor="primary"
                    colorScheme="White"
                    className="py-[13px] px-5 ml-[10px] border-[1px] rounded-[10px]"
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                {/* Create */}
                {pathname !== "/createpost" && (
                  <Link href={"/createpost"}>
                    <ButtonIcon
                      className="bg-gray-100 text-black rounded-full p-2 hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out hidden sm:flex"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      }
                    />
                  </Link>
                )}

                {/* Favorite */}

                {pathname !== "/favorite" && (
                  <Link href={"/favorite"}>
                    <ButtonIcon
                      className="bg-gray-100 text-black rounded-full py-2 ml-[10px]  hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      }
                    />
                  </Link>
                )}

                {/* Notification */}

                {pathname !== "/notification" && <NotiDropdown />}

                {/* Profile */}
                <ButtonIcon
                  className="bg-[#D2E5FF] text-white rounded-full p-2 ml-[10px]  max-[640px]:hidden"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6496 19.4054C20.2024 19.2902 20.5316 18.7117 20.2569 18.2183C19.6513 17.1307 18.6973 16.1749 17.4769 15.4465C15.9051 14.5085 13.9792 14 11.998 14C10.0168 14 8.09097 14.5085 6.51917 15.4465C5.29873 16.1749 4.34471 17.1307 3.73913 18.2183C3.46443 18.7117 3.79367 19.2902 4.34648 19.4054V19.4054C9.39329 20.4572 14.6027 20.4572 19.6496 19.4054V19.4054Z"
                        fill="#207BFF"
                      />
                      <circle cx="12" cy="8" r="5" fill="#207BFF" />
                    </svg>
                  }
                />

                {/* Hamburger Bar*/}
                <Link href={"/"}>
                  <ButtonIcon
                    className="bg-gray-100 text-black rounded-full p-2 ml-[10px]  hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out flex sm:hidden"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    }
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
