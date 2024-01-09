"use client";
import { useCart } from "./CartContext";
import Product from "../components/Product";
import Link from "next/link";
import { Products } from "./data";
import { data } from "./data";

const Layout = () => {
    const { cart } = useCart();
    const { products } = data
      
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col gap-3">
         <span className="text-3xl top-7 relative w-[322px]">E-Commerce Cart app</span>
          <Link className="flex justify-end" href='cart'>Cart ({cart.length})</Link>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} /> 
          ))}
        </div>
        {/* <Cart /> */}
      </div>
    </main>
  )
}

export default Layout