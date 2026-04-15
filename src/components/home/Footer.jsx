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
    links: ["Home", "About", "Dealership", "Contact"],
  },
  {
    title: "Shopping",
    links: ["Shop", "Categories", "Cart", "Wishlist"],
  },
  {
    title: "Categories",
    links: [
      "Premium",
      "Intermediate",
      "Economy",
      "Bath Accessories",
    ],
  },
  {
    title: "Products",
    links: [
      "Cock",
      "Mixture",
      "Single Lever",
      "Concealed Stop Cock",
    ],
  },
];

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 h-screen w-full z-0 bg-white text-page">
      <footer className="relative flex flex-col h-full py-4 md:py-6">

        {/* MAIN CONTENT — centered vertically */}
        <div className="flex-1 flex flex-col justify-center min-h-0">

          {/* TOP SECTION — links + contact */}
          <div className="container mx-auto px-6 md:px-12 mb-3 md:mb-4">
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

          {/* LOGO + ADDRESS — same row */}
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-center gap-4 grid-cols-[1fr_auto]">

              {/* LOGO */}
              <div className="flex items-center">
                <img
                  src={LogoMark}
                  alt="Cavier"
                  className="w-full max-w-4xl object-contain"
                />
              </div>

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

      </footer>
    </div>
  );
};

export default Footer;
