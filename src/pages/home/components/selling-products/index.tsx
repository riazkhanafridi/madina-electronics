import { memo } from "react";
import ProductCard from "../../../../components/products-card";
import { products } from "../../../../components/constants/productsArray";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

const SellingProducts = memo(function SellingProducts() {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="mt-6 ">
      <h1 className="font-bold text-colors-darkBlue text-3xl text-center">
        Our Best Selling Products
      </h1>

      <div className="grid grid-cols-3 gap-6 mx-10">
        {products.slice(0, 9).map((it) => {
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

      <div className="flex gap-x-4 px-4 justify-end mt-6 mb-4">
        <Button
          className="bg-colors-bgSecondary text-white font-semibold text-md rounded-xl py-6 hover:bg-colors-bgButtonHover"
          onClick={() => navigate(`/product`)}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
});

export default SellingProducts;
