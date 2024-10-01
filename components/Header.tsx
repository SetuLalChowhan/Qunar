"use client";
import Image from "next/image";
import logo from "../public/images/Logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  // List of links for the navigation menu
  const links: string[] = ["Home", "Services", "Work", "Process", "Contact"];

  // State to track the active link (initially "Home")
  const [active, setActive] = useState<string>("Home");

  // State to track if the mobile navigation is open or closed (false means closed by default)
  const [nav, setNav] = useState<boolean>(false);

  // UseEffect hook to set the active link based on the current URL path
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = links.find(
      (link) => currentPath === `/${link.toLowerCase()}` // Special handling for the Home route
    );

    if (currentLink) {
      setActive(currentLink); // Set the current active link based on the URL
    }
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Function to toggle the mobile navigation menu open/close
  const handleClick = () => {
    setNav((prev) => !prev); // Toggle between true/false
  };

  // Function to set the active link
  const handleClick2 = (item: string) => {
    setActive(item); // Set the clicked item as active
  };

  return (
    <section className=" sticky top-0 z-50 bg-[#171717]">
      {/* Header Container */}
      <div className=" container flex justify-between items-center p-4">
        {/* Logo & Title Section */}
        <Link
          href="/"
          onClick={() => {
            handleClick2("Home"); // Set "Home" as active when logo is clicked
            handleClick(); // Close mobile navigation if it's open
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

        {/* Desktop Navigation Menu (visible on large screens) */}
        <div className="hidden lg:flex justify-center items-center gap-10">
          {links.map((link, index) => (
            <Link
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              key={index}
              className={`font-[500] text-white transition duration-300 ease-in-out ${
                link === active
                  ? "bg-[#6e73f5] px-4 py-2   rounded-lg"
                  : "hover:bg-[#6e73f5] hover:rounded-lg px-6 py-3"
              }`}
              onClick={() => handleClick2(link)} // Set the clicked link as active
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Contact Us Button for Desktop */}
        <div className="hidden lg:flex">
          <button className="w-[135px] h-[59px] bg-[#6e73f5] rounded-lg text-[18px] text-white transition duration-300 ease-in-out transform hover:bg-[#6e73f5] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8F94FB] focus:ring-opacity-50">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon (Hamburger or Close icon) */}
        <div className="lg:hidden flex mt-3" onClick={handleClick}>
          {nav ? (
            <IoClose color="white" size={30} /> // Close icon when nav is open
          ) : (
            <GiHamburgerMenu color="white" size={30} /> // Hamburger icon when nav is closed
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed left-0 w-full bg-[#171717] h-screen z-40 transition-transform duration-500 ease-in-out transform ${
          nav ? "translate-x-0" : "-translate-x-full" // Slide menu in/out from the left
        }`}
      >
        {/* Links inside the mobile menu */}
        <div className="flex flex-col gap-5 p-8">
          {links.map((link, index) => (
            <Link
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => {
                handleClick2(link); // Set the clicked link as active
                handleClick(); // Close the mobile menu after clicking
              }}
              key={index}
              className={` text-white w-full text-center transition duration-300 ease-in-out font-[500] py-2 rounded-lg ${
                link === active ? "bg-[#6e73f5]" : "hover:bg-[#6e73f5]"
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Contact Us Button for Mobile */}
        <div className="flex justify-center items-center mt-8">
          <button className="w-[135px] h-[59px] bg-[#8F94FB] rounded-lg text-[18px] text-white transition duration-300 ease-in-out transform hover:bg-[#6e73f5] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8F94FB] focus:ring-opacity-50">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
