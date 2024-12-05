import { memo, useState } from "react";
import { Link } from "react-router-dom";

const Header = memo(function Header() {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  const linkStyles = "pb-2 text-2xl cursor-pointer";

  return (
    <div className="flex justify-between px-4 mt-6">
      <div>
        <h3 className="font-bold text-2xl">Madina Electronic</h3>
      </div>

      <div className="flex gap-x-4">
        <Link
          to="/"
          onClick={() => handleClick("/")}
          className={`${linkStyles} ${
            activeLink === "/"
              ? "border-b-2 border-[#BCDAE2] text-[#F4A870]"
              : "text-[#000]"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => handleClick("/about")}
          className={`${linkStyles} ${
            activeLink === "/about"
              ? "border-b-2 border-[#BCDAE2] text-[#F4A870]"
              : "text-[#000]"
          }`}
        >
          About
        </Link>
        <Link
          to="/product"
          onClick={() => handleClick("/product")}
          className={`${linkStyles} ${
            activeLink === "/product"
              ? "border-b-2 border-[#BCDAE2] text-[#F4A870]"
              : "text-[#000]" // Set color when active
          }`}
        >
          Product
        </Link>
        <Link
          to="/contact"
          onClick={() => handleClick("/contact")}
          className={`${linkStyles} ${
            activeLink === "/contact"
              ? "border-b-2 border-[#BCDAE2] text-[#F4A870]"
              : "text-[#000]" // Set color when active
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
});

export default Header;
