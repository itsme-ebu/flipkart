import navList from "@/contents/navlist";
import Image from "next/image";
import React from "react";
import { IoCart } from "react-icons/io5";

function ProductNavWeb() {
  return (
    <nav className="max-md:hidden bg-white">
      <div className=" bg-[#2874F0] w-full h-full py-3  text-white flex justify-center items-center gap-8">
        <div>
          <Image
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            width={80}
            height={50}
          />
          <p className="text-xs italic text-slate-200 flex items-center gap-[2px]">
            Explore <span className="text-[#FFE500] font-semibold">plus</span>{" "}
            <span>
              <Image
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                width={10}
                height={10}
              />
            </span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className=" font-light p-2 rounded-sm w-80 outline-none"
        />
        <button className="px-8 py-2 bg-white text-blue-600 font-semibold">
          Login
        </button>
        <h2 className="font-semibold">Become a Seller</h2>
        <h2 className="font-semibold">More</h2>
        <div className="font-semibold flex items-center gap-2">
          <IoCart size={"1.3em"} />
          <h2 className="text-md">Cart</h2>
        </div>
      </div>
      <div className="flex items-center justify-between px-10 py-3 border-b">
        {navList.map((item) => (
          <p className="text-sm font-medium">{item}</p>
        ))}
      </div>
    </nav>
  );
}

export default ProductNavWeb;
