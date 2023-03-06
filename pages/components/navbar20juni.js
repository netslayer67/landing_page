import { Link } from "react-scroll";
import Image from "next/image";
import CompanyImage from "/public/img/daisi-logo-nobg.png";
import Router from "next/router";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function NavBar() {
  const url = "http://localhost:3001";
  const signin = () => {
    Router.push({
      pathname: url + "/signin",
    });
  };
  const signup = () => {
    Router.push({
      pathname: url + "/signup",
    });
  };
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7 text-base border-2 rounded-full bg-gray-200 text-dark hover:text-sky-600 dark:text-dark"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 text-base border-2 rounded-full bg-gray-200 text-dark hover:text-sky-600 dark:text-sky-300"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="absolute  top-0 left-0 z-10 flex w-full items-center bg-primary ">
      <div className="container bg-primary">
        <div className=" borelative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-secondary"
            >
              T I M K A D O
              {/* <Image
                src={CompanyImage}
                alt="gambar daisi"
                className="mx-auto max-w-full"
                width={50}
                height={50}
              /> */}
            </a>
          </div>
          <div className="flex  px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="mr-2 block lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out dark:text-secondary dark:bg-white"></span>
              <span className="hamburger-line transition duration-300 ease-in-out dark:text-secondary dark:bg-white"></span>
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out dark:text-secondary dark:bg-white"></span>
            </button>

            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-primary dark:bg-primary shadow-primary dark:shadow-sky-600 py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    About Us
                  </a>
                </li>
                {/* <li className="group">
                  <a
                    href="#portfolio"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Portfolio
                  </a>
                </li> */}
                <li className="group">
                  <a
                    href="#proposition"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Value Proposition
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#pricing"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Pricing & Proposal
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#client"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Client
                  </a>
                </li>
                {/* <li className="group">
                  <a
                    href="#contact"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Contact Us
                  </a>
                </li> */}
                <li className="group">
                  <a
                    href="#terms"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Terms & Conditions
                  </a>
                </li>{" "}
                {/* <li className="group">
                  <a
                    href="http://localhost:3001/signin"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Sign in
                  </a>
                </li> */}
                <li className="group">
                  <a
                    //  href="https://selfservicevercell.vercel.app/signup"
                    href="http://localhost:3001/signup"
                    className="mx-8 flex py-2 text-base text-secondary group-hover:text-sky-600 dark:text-sky-300"
                  >
                    Register
                  </a>
                </li>
                <li className="flex items-center pl-8 mt-2">
                  {renderThemeChanger()}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
