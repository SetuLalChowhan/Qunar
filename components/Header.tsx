"use client";
import Image from "next/image";
import logo from "../public/images/Logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const links = ["Home", "Services", "Work", "Process", "Contact"];
  const [active, setActive] = useState("Home");
  const [nav, setNav] = useState(true);

  // Set the active link based on the current pathname on component mount
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = links.find(
      (link) =>
        currentPath === `/${link.toLowerCase()}` ||
        (link === "Home" && currentPath === "/")
    );
    if (currentLink) {
      setActive(currentLink);
    }
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClick2 = (item: string) => {
    setActive(item);
  };

  return (
    <section className="container sticky top-0">
      <div className="flex justify-between">
        <Link
          href={"/"}
          onClick={() => {
            handleClick2("Home");
          }}
          className="flex justify-center items-center gap-2"
        >
          <Image
            className="lg:h-auto"
            src={logo}
            alt="Logo"
            width={60}
            priority
          />
          <h1 className="lg:text-[36px] text-[24px] font-[700]">QUNAR</h1>
        </Link>
        <div className="hidden lg:flex justify-center items-center gap-10">
          {links.map((link, index) => (
            <div
              key={index}
              className={`font-[500] ${
                link === active ? "bg-[#8F94FB] px-3 py-1 rounded-lg" : ""
              }`}
              onClick={() => handleClick2(link)}
            >
              <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                {link}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex">
          <button className="w-[135px] h-[59px] bg-[#8F94FB] rounded-lg text-[18px]">
            Contact Us
          </button>
        </div>
        <div className="lg:hidden flex mt-3" onClick={handleClick}>
          {nav ? (
            <GiHamburgerMenu color="white" size={30} />
          ) : (
            <IoClose size={30} color="white" />
          )}
        </div>
      </div>

      <div className={nav ? "hidden" : "mt-4"}>
        <div className="flex flex-col gap-5">
          {links.map((link, index) => (
            <div
              onClick={() => {
                handleClick2(link);
                handleClick();
              }}
              key={index}
              className={`w-full text-center hover:bg-[#8F94FB] font-[500] py-2 ${
                link === active ? "bg-[#8F94FB]" : ""
              }`}
            >
              <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                {link}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className="w-[135px] h-[59px] bg-[#8F94FB] rounded-lg text-[18px]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
