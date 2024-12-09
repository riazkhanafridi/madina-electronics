import { memo, useState } from "react";

import OurHero from "../home/components/hero";
import ProductCard from "../../components/products-card";
import { products } from "../../components/constants/productsArray";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Product = memo(function Product() {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName}`);
  };
  const [visibleProducts, setVisibleProducts] = useState(9);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 30);
  };

  return (
    <>
      <OurHero />
      <h1 className="text-center text-2xl font-bold text-colors-darkGray">
        Our Best Products
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-10 ">
        {products.slice(0, visibleProducts).map((it) => {
          return (
            <ProductCard
              key={it.id} // Ensure unique key for each product
              description={it.description}
              image={it.image}
              name={it.title}
              price={it.price}
              rating={it.rating}
              onClick={() => handleProductClick(it.title)}
            />
          );
        })}
      </div>
      {visibleProducts < products.length && (
        <div className="flex gap-x-4 px-4 justify-center mt-6 w-full">
          <Button
            className="bg-colors-darkBlue text-white font-semibold text-md rounded-xl py-6 hover:bg-colors-orange"
            onClick={loadMoreProducts}
          >
            MORE Products
          </Button>
        </div>
      )}
    </>
  );
});

export default Product;
