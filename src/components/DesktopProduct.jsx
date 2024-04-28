import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import { MdShoppingCart, MdFlashOn } from "react-icons/md";

function DesktopProduct() {
  return (
    <main className=" grid grid-cols-3 bg-white max-md:hidden">
      <div className="w-full h-[60vh] mt-5 relative">
        <Image
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/air-cooler/6/h/7/-original-imagzhyrqhnc5drs.jpeg?q=70&crop=false"
          fill
          objectFit="contain"
        />
        <div className=" absolute -bottom-20 left-0 w-full h-fit p-2 flex items-center gap-4">
          <button className=" uppercase bg-[#FF9F00] flex items-center text-white px-8 py-4 font-semibold gap-2">
            <MdShoppingCart />
            add to cart
          </button>
          <button className=" uppercase bg-[#FB641B] flex items-center text-white px-8 py-4 font-semibold gap-2">
            <MdFlashOn />
            Buy now
          </button>
        </div>
      </div>
      <div className="w-full col-span-2 px-4">
        <div className="text-xs breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home and Kitchen</a>
            </li>
            <li>Air Cooler</li>
          </ul>
        </div>
        <h2 className="text-lg">
          Hindware 85 L Desert Air Cooler (Lavender and white, Vectra)
        </h2>

        <div className="flex items-center gap-2 my-2">
          <p className="bg-green-700 text-xs py-1 w-fit px-2 text-white rounded-md flex items-center">
            4.2 <IoMdStar />
          </p>
          <h2 className="text-slate-500 font-medium text-sm">
            51,512 Rattings & 785 Reviews
          </h2>
          <Image
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            width={80}
            height={30}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-semibold">₹448</span>
          <span className="text-lg line-through text-slate-500 font-light">
            ₹9,899
          </span>
          <span className="font-semibold text-green-600">80% off</span>
        </div>
        <div className="my-3">
          <h2 className="font-medium">Coupons for you</h2>
          <p className="flex items-center gap-2 my-3 text-sm">
            <BsFillTicketPerforatedFill color="green" />
            <strong> Partner Offer</strong>Buy this & get upto ₹500 Off on
            Furniture{" "}
            <span className="text-blue-700 font-semibold">Know More</span>
          </p>
          <h2 className="font-medium">Available offers</h2>
          <p className="flex items-center gap-2 my-3 text-sm">
            <FaTag color="green" />
            <strong> Bank Offer</strong>5% Cashback on Flipkart Axis Bank Card
            <span className="text-blue-700 font-semibold">T&C</span>
          </p>
          <p className="flex items-center gap-2 my-3 text-sm">
            <FaTag color="green" />
            <strong> Bank Offer</strong>10% off on Axis Bank Credit Card EMI
            Transactions, up to ₹1,500 on orders of ₹5,000 and above
            <span className="text-blue-700 font-semibold">T&C</span>
          </p>
          <p className="flex items-center gap-2 my-3 text-sm">
            <FaTag color="green" />
            <strong> Bank Offer</strong>10% off on Citi-branded Credit Card
            Transactions, up to ₹1,750 on orders of ₹5,000 and above
            <span className="text-blue-700 font-semibold">T&C</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default DesktopProduct;
