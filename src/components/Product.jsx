import Image from "next/image";
import React from "react";
import { IoStar, IoStarHalfSharp } from "react-icons/io5";

function Product({ thumbnail, name, price, old_price, reviews, brand }) {
  return (
    <div className="w-1/2 lg:w-fit h-[21rem] bg-white py-5 px-3 border-r border-b">
      <Image src={thumbnail} width={100} height={150} className="mx-auto" />
      <h2 className="mt-2 font-medium">{brand} Cooler</h2>
      <div>
        <span className="text-sm font-medium text-[#29A644]">81% off</span>{" "}
        <span className="text-sm line-through text-slate-500">{old_price}</span>{" "}
        <span className="font-semibold">₹{price}</span>
      </div>
      <p className="bg-[#E7F8EC] text-xs font-semibold w-fit text-[#26A541] p-1 px-2">
        Hot Deal
      </p>
      <div className="mt-2 flex gap-1 items-center">
        <IoStar color="green" />
        <IoStar color="green" />
        <IoStar color="green" />
        <IoStar color="green" />
        <IoStarHalfSharp color="green" />
        <p className="text-xs text-slate-500">{reviews}</p>
      </div>
      <p className="text-xs mt-2">Free delivery</p>
    </div>
  );
}

export default Product;
