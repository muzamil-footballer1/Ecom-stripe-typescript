"use client";
import { useCart } from "./CartContext";
import Image from "next/image";
import ProductRate from './ProductRate'


const Product = ({ product }) => {
  const { addToCart, cart } = useCart();

  const isProductInCart = cart.some((item) => item.id === product.id);
  return (
    <div className="border rounded-lg p-4 shadow-lg">
     <Image width={120} height={70} className="ml-7 object-cover pb-5 justify-center" src={product.pic} alt="img" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-400">${product.price.toFixed(2)}</p>
      <ProductRate rate={product.rating} count={product.numReviews} />
      <button
        onClick={() => addToCart(product)}
        disabled={isProductInCart}
        className={`mt-2 px-4 py-2 ${
          isProductInCart
            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        } rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      >
        {isProductInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;