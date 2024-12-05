import React, { memo } from "react";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  onClick?: () => void; // Optional for handling click events
};

const ProductCard = memo((props: ProductCardProps) => {
  return (
    <>
      <div
        className=" rounded-xl  shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col  mt-10 "
        onClick={props.onClick}
      >
        <img
          src={props.image}
          alt={props.name}
          className="h-[400px] w-full object-cover rounded-xl overflow-hidden"
        />

        <div className="mt-4 px-6">
          <h2 className="text-lg font-semibold text-gray-800">{props.name}</h2>

          <p className="text-gray-600 text-sm mt-2 ">{props.description}</p>

          <div className=" mt-4 mb-4">
            <span className="text-xl font-bold text-black">
              PKR:{props.price}
            </span>

            <span className="f">
              <span className="text-yellow-500 mr-1">⭐</span>
              {props.rating}
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductCard;
