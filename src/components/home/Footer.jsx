import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import LogoMark from "../../assets/logo-footer.png";
import logo from "../../assets/logo1.png";
import Search from "../../assets/home/search.png";
import Cart from "../../assets/home/cart.png";
import Heart from "../../assets/home/heart.png";
import User from "../../assets/home/user.png";
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandPinterest } from "react-icons/tb";

const sitemapColumns = [
  {
    title: "Cavier",
    links: ["Home", "About", "Dealership", "Contact", "Contact"],
  },
  {
    title: "Shopping",
    links: ["Shop", "Categories", "Cart", "Wishlist", "Wishlist"],
  },
  {
    title: "Categories",
    links: [
      "Premium",
      "Intermediate",
      "Economy",
      "Bath Accessories",
      "Bath Accessories",
    ],
  },
  {
    title: "Categories",
    links: [
      "Cock",
      "Mixture",
      "Single Lever",
      "Concealed Stop Cock",
      "Concealed Stop Cock",
    ],
  },
];

const Footer = () => {
  const containerRef = useRef(null);
const footerScrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
  const el = footerScrollRef.current;
  if (!el) return;

  const handleWheel = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = el;

    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    if (
      (e.deltaY < 0 && isAtTop) ||     // scrolling up at top
      (e.deltaY > 0 && isAtBottom)     // scrolling down at bottom
    ) {
      e.preventDefault();

      // Pass scroll to window (parallax resumes)
      window.scrollBy({
        top: e.deltaY,
        behavior: "auto",
      });
    }
  };

  el.addEventListener("wheel", handleWheel, { passive: false });

  return () => el.removeEventListener("wheel", handleWheel);
}, []);
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const logoY = useTransform(smoothProgress, [0, 1], [-1, 0]);
  const logoScale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  return (
    <div
      ref={containerRef}
      id="site-footer"
      className="relative h-screen w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <div ref={footerScrollRef} className="fixed bottom-0 left-0 h-screen w-full bg-white text-page overflow-y-auto hide-scrollbar">
        
        <motion.footer
          className="flex flex-col h-full py-4 md:py-6"
        >

          {/* NAVBAR */}
          <div className="px-6 md:px-12 flex items-center justify-between mb-4 md:mb-6">
            {/* LEFT NAV */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-page">
              <a href="#" className="hover:opacity-60 transition-opacity">Products</a>
              <a href="#" className="hover:opacity-60 transition-opacity">Category</a>
              <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="Cavier" className="w-[120px] md:w-[150px] invert" />
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-2 md:gap-3 ml-auto">
              <div className="hidden md:flex items-center justify-center border border-page w-9 h-9 rounded-full cursor-pointer hover:opacity-60 transition-opacity">
                <img src={Cart} alt="cart" className="w-4 h-4 object-contain invert" />
              </div>
              <div className="hidden md:flex items-center justify-center border border-page w-9 h-9 rounded-full cursor-pointer hover:opacity-60 transition-opacity">
                <img src={Heart} alt="wishlist" className="w-4 h-4 object-contain invert" />
              </div>
              <div className="hidden md:flex items-center justify-center border border-page w-9 h-9 rounded-full cursor-pointer hover:opacity-60 transition-opacity">
                <img src={User} alt="user" className="w-4 h-4 object-contain invert" />
              </div>
              <div className="hidden md:flex items-center border border-page px-3 py-1.5 gap-2 rounded-full cursor-pointer hover:opacity-60 transition-opacity">
                <img src={Search} alt="search" className="w-4 h-4 object-contain invert" />
                <span className="text-sm text-page font-light">Search</span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 flex flex-col justify-between min-h-0">

            {/* TOP SECTION */}
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.1fr] gap-4 md:gap-8">
                {sitemapColumns.map((column, idx) => (
                  <div key={idx}>
                    <h3 className="mb-2 md:mb-4 text-base md:text-lg font-semibold drop-shadow-[0_3px_0_rgba(0,0,0,0.2)]">
                      {column.title}
                    </h3>
                    <ul className="space-y-1 md:space-y-2 text-sm">
                      {column.links.map((link, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="hover:opacity-60 transition-opacity drop-shadow-[0_3px_0_rgba(0,0,0,0.2)]"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* CONTACT */}
                <div className="col-span-2 md:col-span-1">
                  <p className="text-sm font-normal leading-5 text-page">
                    <strong className="font-semibold">Phone:</strong> +91 7433993997, 7433993998
                  </p>
                  <p className="text-sm font-normal leading-5 text-page">
                    <strong className="font-semibold">Trade Enq:</strong> +91 73 83 93 33 33
                  </p>
                  <p className="text-sm font-normal leading-5 text-page">
                    <strong className="font-semibold">Toll-free:</strong> 1800 313 7724
                  </p>
                  <p className="text-sm font-normal leading-5 text-page">
                    <strong className="font-semibold">Email:</strong> info@cavierindia.com
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-page">Working Hours:</h4>
                    <p className="text-sm font-normal leading-5 text-page">Saturday-Thursday: 8:30AM to 7PM</p>
                    <p className="text-sm font-normal leading-5 text-page">Fridays: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-black my-3 md:my-4" />

            {/* LOGO + ADDRESS */}
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid items-center gap-4 lg:grid-cols-[1.3fr_0.4fr]">

                {/* LOGO */}
                <motion.div
                  style={{ y: logoY, scale: logoScale }}
                  className="flex items-end"
                >
                  <img
                    src={LogoMark}
                    alt="Cavier"
                    className="w-full max-w-4xl object-contain"
                  />
                </motion.div>

                {/* RIGHT */}
                <div className="space-y-2 md:space-y-3">
                  <p className="font-semibold text-sm leading-relaxed">
                    O1, Vision Industrial Park, Changa,
                    <br />
                    Lalpur Road, Jamnagar 361 012, INDIA
                  </p>

                  <p className="text-sm font-semibold text-page">
                    +91 74339 93997
                  </p>

                  <div className="flex items-center gap-4 text-xl">
                    <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                    <RiFacebookBoxLine className="cursor-pointer hover:text-blue-500" />
                    <BsTwitterX className="cursor-pointer hover:text-gray-700" />
                    <TbBrandPinterest className="cursor-pointer hover:text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-page pt-3 px-6 md:px-12 flex flex-col md:flex-row justify-between text-sm font-semibold text-page">
            <p>Copyright 2026 - Cavier India All Copyrights Reserved</p>
            <p>
              Made with <span className="text-red-500">❤</span> by Codelix
            </p>
          </div>

        </motion.footer>
      </div>
    </div>
  );
};

export default Footer;