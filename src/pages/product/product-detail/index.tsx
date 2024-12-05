import { useParams } from "react-router-dom";
import { products } from "../../../components/constants/productsArray";

const ProductDetail = () => {
  const { productName } = useParams();

  const product = products.find((p) => p.title === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className=" mt-10 p-6 flex justify-center">
      <div className=" gap-6 rounded-xl shadow-md w-[50%]">
        <div className="w-full h-[500px]">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        <div className=" flex flex-col gap-4 mb-4 px-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold text-gray-800">
              Price: PKR {product.price}
            </span>
            <span className="text-lg font-medium text-gray-600">
              Rating: <span className="text-yellow-500">⭐</span>{" "}
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
