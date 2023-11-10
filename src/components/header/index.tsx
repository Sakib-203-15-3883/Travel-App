"use client";
import { useTheme } from "next-themes";

import { FaSearch, FaUser } from "react-icons/fa";
import "./RightNavigation.css";
import { useContext, useEffect, useState } from "react";

import Link from "next/link";

import { menuItems } from "@/utils";

import { MenuItem } from "@/utils/types";

import Button from "../button";

import ThemeToggler from "../theme";

import { signIn, signOut, useSession } from "next-auth/react";

import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";

export default function Header() {
  const { theme } = useTheme();
  const [sticky, setSticky] = useState<boolean>(false);

  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const { data: session } = useSession();
  // const {setSearchQuery, setSearchResults} = useContext(GlobalContext)
  const router = useRouter();
  const pathName = usePathname();

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  });

  // useEffect(()=> {
  //   setSearchResults([])
  //   setSearchQuery('')
  // },[pathName])

  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
         ${sticky ? "fixed  shadow-sticky" : ""}
         ${theme === "dark" ? "dark:bg-dark" : "bg-white"} 
       `}
      >
        <div className="container">
          <div className="relative -mx-3 flex items-center justify-between">
            {/* Start : logo on the left part of header  */}

            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href={"/"}
                className={`text-[30px] font-extrabold cursor-pointer block w-full
                    ${sticky ? "py-5 lg:py-2" : "py-6"}
                    `}
              >
                Trisog
              </Link>
            </div>

            {/* End : logo on the left part of header  */}

            {/* start:  navigation buttons on the middle part of Header  */}

            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* Start : menu button for mobile screen  */}

                <button
                  onClick={handleNavbarToggle}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] -rotate-45" : ""}
                        `}
                  />
                </button>

                {/* End : menu button for mobile screen  */}

                <nav
                  id="navbarCollapse"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 
                px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

                ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }
                `}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/*End :  navigation buttons on the middle part of Header  */}

              {/* //////////////////////////////////////////// */}

              {/* Start :  create ,{login/logout} ,theme button on the right side of navbar  */}

              <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0">
                <div className="right-navigation m-3 ">
                  <Link href="/search">
                    <div className="search-icon mr-10 hidden lg:flex">
                      <FaSearch />
                    </div>
                  </Link>

                  <Link href="/profile">
                    <div
                      className="user-icon mx-200 hidden lg:flex"
                      onClick={() => {}}
                    >
                      <FaUser />
                    </div>
                  </Link>

                  <button
                    className="login-signup ml-100 "
                    onClick={
                      session !== null
                        ? () => {
                            signOut();
                          }
                        : () => {
                            signIn("github");
                          }
                    }
                  >
                    <span>{session !== null ? "Logout" : "Login/Signup"}</span>
                  </button>

                  <div className="flex gap-3 items-center px-100 ml-1">
                    <ThemeToggler />
                  </div>
                </div>
              </div>

              {/* End  :  create ,{login/logout} ,theme button on the right side of navbar  */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
