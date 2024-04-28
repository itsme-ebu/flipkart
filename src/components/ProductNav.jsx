import React from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
function ProductNav() {
  return (
    <nav className="bg-white p-3 flex justify-between items-center text-black md:hidden">
      <div className="flex items-center gap-5">
        <BsArrowLeft size={"1.5em"} />
        <Image
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png"
          width={30}
          height={30}
        />
      </div>
      <div className="flex items-center gap-5">
        <CiSearch size={"1.3em"} />
        <IoCartOutline size={"1.3em"} />
        <p>Login</p>
      </div>
    </nav>
  );
}

export default ProductNav;
