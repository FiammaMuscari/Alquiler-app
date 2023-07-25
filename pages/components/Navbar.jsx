import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isContact, setIsContact] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHome(router.pathname === "/");
  }, [router.pathname]);

  useEffect(() => {
    setIsContact(router.pathname === "/contacto");
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.scrollTo(0, 0);
  };

  const handleNavItemClick = (e) => {
    if (router.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    document.body.scrollTo(0, 0);
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavItem = ({ href, children }) => (
    <Link
      href={href}
      className={` sm:text-base text-[4em]  hover:text-[#444444]   ${
        router.pathname === href
          ? "text-[#faebd7] sm:text-[#faebd7]"
          : "text-[#444444]"
      } ${isHome ? "sm:text-white sm:hover:text-[#444444]" : "sm:text-white "}`}
      onClick={handleNavItemClick}
    >
      {children}
    </Link>
  );

  return (
    <nav
      className={`w-screen font-semibold p-[2em] items-end sm:items-center  mt-[1em] h-[65px] sm:mt-0  sm:flex md:flex pl-6 sm:px-6 fixed sm:bg-opacity-50 xs:bg-opacity-0 justify-between transition-all duration-500 z-50  ${
        isHome
          ? isMenuOpen
            ? " bg-opacity-0"
              ? isScrolled
              : "sm:bg-[#9c958beb] sm:bg-opacity-50 sm:backdrop-blur-xs"
            : "sm:bg-[#9c958beb] sm:bg-opacity-[90%] sm:backdrop-blur-xs "
          : "sm:bg-[#9c958beb] sm:bg-opacity-90 sm:backdrop-blur-xs"
      } flex items-center sm:shadow-md`}
    >
      <div className="sm:w-full  px-4 pb-4 pt-0 sm:py-4 flex flex-col sm:flex-row sm:justify-between">
        <div className="flex gap-2">
          <Link
            href="/"
            className={`text-white font-bold text-xl cursor-pointer ${
              isHome ? "" : "text-violet-500"
            } hidden md:inline-flex`}
          ></Link>
          <ul className="hidden  md:flex justify-around w-scr items-center  gap-4 sm:gap-14 lg:ml-[3em] md:ml-[0.5em]">
            <NavItem href="/">Inicio</NavItem>
            <NavItem href="/about-us">Sobre nosotros</NavItem>
          </ul>
        </div>
      </div>
      <div className="md:hidden ">
        <button
          className="focus:outline-none "
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={` ${isHome ? "#faebd7" : "#faebd7"}`}
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={` ${
                isHome ? "#444444" : isContact ? "#444444" : "#444444"
              }`}
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed rounded-r-[1em]   bg-[#9c958beb] top-0 left-0 z-20 h-screen w-[100%] transition-all duration-500 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-black  shadow-lg`}
      >
        <div className="container  mx-auto px-4 py-2">
          <div className="flex justify-end ">
            <button
              className="focus:outline-none mt-[0.6em] "
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#faebd7"
                className="w-8 h-8 mt-[0.7em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link
            href="/"
            className={`text-white font-bold text-lg  mb-2 flex justify-center ${
              !isHome && "text-violet-500"
            }`}
            onClick={closeMenu}
          ></Link>
          <ul className="flex text-center mt-[30%] flex-col relative items-center  m-[3em]">
            <div className="font-bold">
              <NavItem href="/">Inicio</NavItem>
            </div>

            <div className="font-bold">
              <NavItem href="/about-us">Sobre nosotros</NavItem>
            </div>
          </ul>
        </div>
        <Image
          className="w-[90%] absolute bottom-0"
          src="/detail.svg"
          width={100}
          height={100}
          alt="detail"
        />
      </div>
    </nav>
  );
};

export default Navbar;
