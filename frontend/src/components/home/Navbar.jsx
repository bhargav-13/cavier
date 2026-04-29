import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import logo from "../../assets/logo1.png";
import Search from "../../assets/home/search.png";
import Cart from "../../assets/home/cart.png";
import Heart from "../../assets/home/heart.png";
import User from "../../assets/home/user.png";
import useCommerce from "../../hooks/useCommerce.js";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { cartCount, wishlistCount } = useCommerce();

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
      { threshold: 0.05 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 lg:px-36 py-6 flex items-center justify-between ${
        isScrolled ? "bg-page/80 backdrop-blur-md py-4" : "bg-transparent"
      } ${
        isFooterVisible
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* LEFT MENU */}
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-6 text-[16px] text-white">
          <Link to="/products" className="hover:text-white/70 transition">
            Products
          </Link>
          <Link to="/products" className="hover:text-white/70 transition">
            Category
          </Link>
          <Link to="/contact" className="hover:text-white/70 transition">
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
  <Link to="/">
    <img
      src={logo}
      alt="logo"
      className="w-[140px] md:w-[180px] cursor-pointer"
    />
  </Link>
</div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-3 md:gap-3">

        {/* CART */}
        <div className="relative hidden lg:flex items-center justify-center border  border-white w-10 h-10 rounded-full transition cursor-pointer">
          <img src={Cart} alt="cart" className="w-5 h-5  object-contain " />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] leading-none text-black">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </div>

        {/* HEART */}
        <div className="relative hidden lg:flex items-center justify-center border border-white w-10 h-10 rounded-full transition cursor-pointer">
          <img src={Heart} alt="wishlist" className="w-5 h-5  object-contain" />
          {wishlistCount > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] leading-none text-black">
              {wishlistCount > 99 ? "99+" : wishlistCount}
            </span>
          )}
        </div>

        {/* USER */}
        <div className="hidden lg:flex items-center justify-center border border-white w-10 h-10 rounded-full transition cursor-pointer">
          <img src={User} alt="user" className="w-5 h-5  object-contain font-bold" />
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex items-center border border-white px-4 py-2 font-bold gap-2 rounded-full transition">
          <img src={Search} alt="search" className="w-5 h-5 object-contain " />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-[15px] text-white placeholder-white font-extralight w-32"
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
