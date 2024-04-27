import Image from "next/image";
import React from "react";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import flipkart_logo from "../../public/img/Flipkart.svg";

const img_list = [
  "https://rukminim2.flixcart.com/flap/490/460/image/033f3268031fa0ba.jpg?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/0f3d008be60995d4.jpg?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/42f9a853f9181279.jpg?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/f07bb3e1c1392b47.jpg?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/913e96c334d04395.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/490/460/image/07d71cbddb6083ad.jpg?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/4be8a679014497f0.png?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/6ecb75e51b607880.jpg?q=20",
  "https://rukminim2.flixcart.com/flap/490/460/image/3e6d75f631ab6055.jpg?q=20",
];

function Navbar() {
  return (
    <nav className="w-full py-3 bg-white h-full px-5 max-md:flex max-md:flex-col gap-3">
      <div className="w-full  max-md:justify-between lg:px-12 flex items-center lg:gap-10">
        <div className="flex justify-between gap-5 items-center">
          <CiMenuBurger size={"1.5em"} />
          <Image src={flipkart_logo} />
        </div>
        <div className="w-full relative max-md:hidden">
          <input
            type="text"
            className="bg-[#F0F5FF] outline-none px-10  py-2 w-full rounded-lg"
            placeholder="Search for Products, Brands and More"
          />
          <CiSearch
            size={"1.6em"}
            className=" absolute top-2 left-2 text-slate-400 "
          />
        </div>
        <div className="flex items-center gap-3">
          <FaRegCircleUser size={"1.4em"} />
          <p>Login</p>
          <IoCartOutline size={"1.6em"} />
        </div>
      </div>
      <div className="w-full relative lg:hidden">
        <input
          type="text"
          className="bg-[#F0F5FF] outline-none px-5 pl-8 text-sm  py-2 w-full rounded-lg"
          placeholder="Search for Products, Brands and More"
        />
        <CiSearch
          size={"1.3em"}
          className=" absolute top-2 left-2 text-slate-400 "
        />
      </div>
      <div className="w-full flex overflow-x-scroll lg:gap-7 lg:justify-center items-center">
        {img_list.map((img, i) => (
          <Image src={img} width={70} height={70} key={i} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
