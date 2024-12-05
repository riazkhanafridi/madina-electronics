import { PhoneIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(function Footer() {
  return (
    <div className="bg-colors-footerBackground w-full mt-10">
      <div className="flex justify-between w-[80%] px-4 py-6">
        <div className="flex flex-col w-full">
          <h1 className="text-colors-orange font-bold text-xl">
            Madina Electronics
          </h1>
          <div className="w-1/2 mt-6">
            <p className="text-white">
              Madina Electronics offers top-quality electronics and kitchen
              appliances. Founded by Muhammad Gull, we are committed to
              delivering the latest tech and innovative products.
            </p>
          </div>
        </div>
        <div className="flex flex-col  w-full">
          <h1 className="text-colors-orange font-bold text-xl">Quick Links</h1>
          <ul className=" flex flex-col gap-4 list-disc pl-5 text-white">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/product" className="text-white">
                Product
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-bold text-xl text-colors-orange">Follow Us</h1>
          <div className="flex gap-2">
            <PhoneIcon className="text-white" />
            <h1 className="text-white">+923333000242</h1>
          </div>
          <p className="text-white">
            Address: Khalid shopping plaza shop no 5 block A karkhano market
            industrial area jamrud road peshawar
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-center text-gray-300 font-semibold text-sm">
          © 2024 afridi. All rights reserved
        </h3>
      </div>
    </div>
  );
});

export default Footer;
