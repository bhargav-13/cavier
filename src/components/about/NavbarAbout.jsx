import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import LogoAbout from "../../assets/logo-about.png";
import logo from "../../assets/logo1.png";
import Search from "../../assets/about/search.png";
import Cart from "../../assets/about/cart.png";
import Heart from "../../assets/about/heart.png";
import User from "../../assets/about/user.png";

const NavbarAbout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 lg:px-40 py-6 flex items-center justify-between ${
        isScrolled ? "bg-page/80 backdrop-blur-md py-4" : "bg-transparent"
      } ${isFooterVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* LEFT MENU */}
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-6 text-[16px] text-white">
          <Link to="/" className="hover:text-white/70 transition">
            Products
          </Link>
          <Link to="/" className="hover:text-white/70 transition">
            Category
          </Link>
          <Link to="/" className="hover:text-white/70 transition">
            Contact
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Menu className="text-white w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* LOGO */}

      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src={isScrolled ? logo : LogoAbout}
          alt="logo"
          className="w-[140px] md:w-[180px] transition-all duration-300"
        />
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-3 md:gap-3">
        {/* CART */}
        <div
          className={`hidden lg:flex items-center justify-center border border-page w-10 h-10 rounded-full transition cursor-pointer  ${
            isScrolled ? "invert" : ""
          }`}
        >
          <img src={Cart} alt="cart" className="w-5 h-5  object-contain " />
        </div>

        {/* HEART */}
        <div
          className={`hidden lg:flex items-center justify-center border border-page w-10 h-10 rounded-full transition cursor-pointer  ${
            isScrolled ? "invert" : ""
          }`}
        >
          <img src={Heart} alt="wishlist" className="w-5 h-5  object-contain" />
        </div>

        {/* USER */}
        <div
          className={`hidden lg:flex items-center justify-center border border-page w-10 h-10 rounded-full transition cursor-pointer  ${
            isScrolled ? "invert" : ""
          }`}
        >
          <img
            src={User}
            alt="user"
            className="w-5 h-5  object-contain font-bold"
          />
        </div>

        {/* SEARCH */}
        <div
          className={`hidden md:flex items-center border border-page px-4 py-2 font-bold gap-2 rounded-full transition  ${
            isScrolled ? "invert" : ""
          }`}
        >
          <img src={Search} alt="search" className="w-5 h-5 object-contain " />
          <input
            type="text"
            placeholder="Search"
            className={`bg-transparent outline-none text-[15px] text-page placeholder-page font-extralight w-32  ${
              isScrolled ? "invert placeholder-white " : ""
            } `}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarAbout;
