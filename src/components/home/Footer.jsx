import { X } from "lucide-react";
import LogoMark from "../../assets/logo-footer.png";
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlinePinterest } from "react-icons/ai";
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

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-8 text-xl font-semibold tracking-[0.02em] text-black drop-shadow-[0_3px_0_rgba(5,5,5,0.2)] md:text-[xl">
        {title}
      </h3>
      <ul className="space-y-5 text-[16px] leading-none  md:text-sm font-normal">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="transition-opacity duration-200 drop-shadow-[0_3px_0_rgba(0,0,0,0.2)] "
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#2f2f35] text-[#2b2b30] transition-colors hover:border-black hover:text-black"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-6 py-14 md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.1fr]">
          {sitemapColumns.map((column) => (
            <FooterColumn key={column.title + column.links[0]} {...column} />
          ))}

          <div className="">
            <p className="text-sm font-normal leading-6 text-black">
              <strong className="font-semibold">Phone:</strong> +91 7433993997,
              7433993998
            </p>
            <p className="mt-1 text-sm font-normal leading-6 text-black">
              <strong className="font-semibold">Trade Enq:</strong> +91 73 83 93
              33 33
            </p>
            <p className="text-sm font-normal leading-6 text-black">
              <strong className="font-semibold">Toll-free:</strong> 1800 313
              7724
            </p>
            <p className="text-sm font-normal leading-6 text-black">
              <strong className="font-semibold">Email:</strong>{" "}
              info@cavierindia.com
            </p>

            <div className="mt-3 ">
              <h4 className="text-md font-semibold text-md text-black">
                Working Hours:
              </h4>
              <p className="text-sm font-normal leading-6 text-black">
                Saturday-Thursday: 8:30AM to 7PM
              </p>
              <p className="text-sm font-normal leading-5 text-black">
                Fridays: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 border-t-2 border-black px-6 pt-20 pb-10 md:px-12">
        <div className="container">
          {/* MAIN ROW */}
          <div className="grid items-center gap-6 lg:grid-cols-[1.6fr_0.5fr]">
            {/* LEFT LOGO */}
            <div className="relative flex items-end">
              <img
                src={LogoMark}
                alt="Cavier"
                className="w-6xl object-contain "
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="p-4">
              <p className="text-md font-semibold leading-5 text-black">
                O1, Vision Industrial Park
                <br />
                Changa, Lalpur Road
                <br />
                Jamnagar 361 012, INDIA
              </p>

              <p className="mt-5 text-md font-semibold text-black">
                +91 74339 93997
              </p>

              <div className="mt-4 flex items-center gap-3 text-black">
                
                  <FaLinkedin className="h-5 w-5" />
              <RiFacebookBoxLine className="h-6 w-6" />
              <BsTwitterX className="h-5 w-5"/>
           <TbBrandPinterest className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-10 border-t font-semibold border-black pt-4 flex flex-col md:flex-row justify-between text-sm text-black">
            <p>Copyright 2026 - Cavier India All Copyrights Reserved</p>
            <p>
              Made with <span className="text-red-500">❤</span> by Codelix
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
