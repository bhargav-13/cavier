import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, User, Heart, ShoppingCart } from "lucide-react";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-34 py-8 flex items-center justify-between ${
        isScrolled ? "bg-page/80 backdrop-blur-md py-4" : "bg-transparent"
      } ${isFooterVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-hidden={isFooterVisible}
    >
      <div className="container flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-sm  font-normal text-white">
          <Link to="/" className="hover:text-white transition-colors">
            Products
          </Link>
          <Link to="/" className="hover:text-white transition-colors">
            Category
          </Link>
          <Link to="/" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <Menu className="text-white w-5 h-5 cursor-pointer" />
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <img src={logo} alt="logo" width={200} />
      </div>
      <div className="flex items-center gap-4 md:gap-4 text-white">
        <div className="hidden md:flex items-center border px-3 py-3 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all">
          <ShoppingCart className="w-4 h-4" />
        </div>

        <div className="hidden md:flex items-center border px-3 py-3 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all">
          <Heart className="w-4 h-4 cursor-pointer hover:text-white/70 transition-colors" />
        </div>

        <div className="hidden md:flex items-center border px-3 py-3 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all">
          <User className="w-4 h-4 cursor-pointer hover:text-white/70 transition-colors" />
        </div>


        <div className="hidden md:flex items-center border pe-4 ps-3 py-1.5 gap-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all">
          <Search className="w-4 h-4 text-white" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm  text-white placeholder-white w-28  transition-all duration-300"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
