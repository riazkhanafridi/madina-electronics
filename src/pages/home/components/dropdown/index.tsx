import { Minus, Plus } from "lucide-react";
import { memo, useState } from "react";

const Dropdown = memo(function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prevState) => (prevState === dropdown ? null : dropdown));
  };

  return (
    <div className="flex flex-col px-6 mt-6 gap-6">
      <div
        className="shadow-md bg-gray-200 flex justify-between items-center rounded-xl  px-4"
        onClick={() => toggleDropdown("productCategories")}
      >
        <h1 className="font-semibold text-2xl  py-3 text-[#374151] px-2">
          Product Categories
        </h1>
        {openDropdown === "productCategories" ? <Minus /> : <Plus />}
      </div>
      {openDropdown === "productCategories" && (
        <div className="shadow-md flex flex-col mt-4 bg-[#F3F4F6]  rounded-2xl px-4 py-2 font-thin">
          <p>Electronics</p>
          <p>Clothing & Fashion</p>
          <p>Home Appliances</p>
          <p>Health & Beauty</p>
          <p>Sports & Outdoors</p>
        </div>
      )}
      <div
        className="shadow-md bg-gray-200 flex justify-between items-center rounded-xl  px-4"
        onClick={() => toggleDropdown("ShippingInformation")}
      >
        <h1 className="font-semibold text-2xl  py-3 text-[#374151] px-2">
          Shipping Information
        </h1>
        {openDropdown === "ShippingInformation" ? <Minus /> : <Plus />}
      </div>
      {openDropdown === "ShippingInformation" && (
        <div className="shadow-md flex flex-col mt-4 bg-[#F3F4F6]  rounded-2xl px-4 py-2 font-thin">
          <p>Free shipping on orders over $50</p>
          <p>Standard shipping: 5-7 business days</p>
          <p>Expedited shipping available at checkout</p>
          <p>International shipping available</p>
        </div>
      )}
      <div
        className="shadow-md bg-gray-200 flex justify-between items-center rounded-xl  px-4"
        onClick={() => toggleDropdown("Return&RefundPolicy")}
      >
        <h1 className="font-semibold text-2xl  py-3 text-[#374151] px-2">
          Return & Refund Policy
        </h1>
        {openDropdown === " Return&RefundPolicy" ? <Minus /> : <Plus />}
      </div>
      {openDropdown === "Return&RefundPolicy" && (
        <div className="shadow-md flex flex-col mt-4 bg-[#F3F4F6]  rounded-2xl px-4 py-2 font-thin">
          <p>Returns accepted within 30 days of purchase</p>
          <p>Full refund on defective items</p>
          <p>Free return shipping on eligible orders</p>
          <p>Items must be in original packaging to qualify for returns</p>
        </div>
      )}
      <div
        className="shadow-md bg-gray-200 flex justify-between items-center rounded-xl px-4"
        onClick={() => toggleDropdown("CustomerReviews")}
      >
        <h1 className="font-semibold text-2xl  py-3 text-[#374151]">
          Customer Reviews
        </h1>
        {openDropdown === "CustomerReviews" ? <Minus /> : <Plus />}
      </div>
      {openDropdown === "CustomerReviews" && (
        <div className="shadow-md flex flex-col mt-4 bg-[#F3F4F6]  rounded-2xl px-4 py-2 font-thin">
          <p>"Amazing product! Highly recommend." - Sarah L.</p>
          <p>"Great quality and fast delivery. Very satisfied!" - Mark D.</p>
          <p>
            "The customer service was excellent, will shop again." - Rachel W.
          </p>
          <p>"Excellent value for money!" - Michael J.</p>
        </div>
      )}
    </div>
  );
});

export default Dropdown;
