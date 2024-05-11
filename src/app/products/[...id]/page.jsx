"use client";
import React from "react";
import { usePathname } from "next/navigation";
import products from "@/contents/product";
import Image from "next/image";
import ProductNav from "@/components/ProductNav";
import { BsCartPlus } from "react-icons/bs";
import { IoStar, IoStarHalfSharp } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
import ProductNavWeb from "@/components/ProductNavWeb";
import DesktopProduct from "@/components/DesktopProduct";
import wow_deal from "../../../../public/img/wow.svg";
import Product from "@/components/Product";

function Page() {
  const pathname = usePathname().slice(10);
  const product = products.filter((prod) => prod.id == pathname)[0];
  return (
    <main className="flex flex-col justify-center gap-1 relative text-black">
      <ProductNav />
      <ProductNavWeb />
      <div className="md:hidden flex justify-center flex-col gap-2">
        <div className="w-full h-[70vh] bg-white relative py-5 pb-5">
          <div className="carousel w-full h-full">
            <div className="carousel-item relative w-full">
              <Image
                src={product.thumbnail}
                fill
                objectFit="contain"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item relative w-full">
              <Image
                src="https://rukminim1.flixcart.com/image/450/500/xif0q/air-cooler/l/1/e/-original-imagzecggjtqj4xm.jpeg?q=20&crop=false"
                fill
                objectFit="contain"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item relative w-full">
              <Image
                src="https://rukminim1.flixcart.com/image/824/989/xif0q/air-cooler/i/x/b/-original-imagzecggszett9j.jpeg?q=60&crop=false"
                fill
                objectFit="contain"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
          <p className=" absolute bottom-1 left-7 flex justify-center items-center gap-3 text-xs">
            <Image
              src="https://rukminim2.flixcart.com/www/48/48/promos/15/07/2021/e2ee7c1c-ec9e-4ae7-b5dd-6b2685299686.jpg?q=60"
              width={20}
              height={20}
            />
            1000+ people ordered this in the last 15 days
          </p>
        </div>

        <div className="bg-white px-3 py-5 w-full h-full">
          <h2 className="">{product.name} </h2>
          <div className="my-2 flex gap-1 items-center">
            <IoStar color="green" />
            <IoStar color="green" />
            <IoStar color="green" />
            <IoStar color="green" />
            <IoStarHalfSharp color="green" />
            <p className="text-xs text-blue-600">21,214 ratings</p>
          </div>
          <div className="flex justify-between items-center pr-2">
            <h2>
              <span className="text-lg font-semibold text-green-800 ">
                80% off
              </span>
              <span className="px-2 text-xl line-through font-semibold text-slate-600">
                {product.old_price}
              </span>
              <span className="text-xl font-semibold">₹{product.price}</span>
            </h2>
            <Image
              src="https://rukminim2.flixcart.com/www/116/34/promos/07/06/2022/b83cee93-e815-4232-bba2-c209116588de.png?q=60"
              width={55}
              height={45}
            />
          </div>
          <p className="text-xs mt-2">Free delivery</p>
          <div className="bg-[#F0F5FF] py-3 my-4 border rounded-md">
            <div className="flex py-2 justify-center gap-5 items-center border-b">
              <h2>Just ₹499</h2>
              <h2>/</h2>
              <h2>90% OFF</h2>
            </div>
            <div className="px-5 flex items-center gap-5">
              <Image src={wow_deal} width={50} height={30} />
              <p>Todays Best Offer</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full  py-3 px-4 bg-white">
          <h2>Delivery by</h2>
          <h2>
            5 May, sunday |{" "}
            <span className="font-semibold text-green-700">Free Delivery</span>{" "}
            <span className=" line-through text-slate-600">₹49</span>
          </h2>
          <h2>if ordered before 12:00AM </h2>
        </div>
        <div className="w-full h-full py-5 grid grid-cols-3 text-center items-center px-4 bg-white">
          <div>
            <Image
              src="https://rukminim2.flixcart.com/www/110/48/promos/12/08/2021/cf3f075e-cb6e-4f06-abb8-554633b1bf96.png?q=60"
              width={25}
              height={20}
              className="mx-auto"
            />
            <p className=" text-[10px] mt-1">
              7 Days Service Center Replacement/Repair{" "}
            </p>
          </div>
          <div>
            <Image
              src="https://rukminim2.flixcart.com/www/110/48/promos/12/08/2021/a7643ad9-1a53-46bf-a304-ae77b1414ef8.png?q=60"
              width={25}
              height={20}
              className="mx-auto"
            />
            <p className="text-[10px] mt-1">Cash On Delivery available </p>
          </div>
          <div>
            <Image
              src="https://rukminim2.flixcart.com/www/110/48/promos/07/06/2022/b83cee93-e815-4232-bba2-c209116588de.png?q=60"
              width={65}
              height={30}
              className="mx-auto"
            />
            <p className="text-[10px] mt-1">Plus (F-Assured) </p>
          </div>
        </div>
        <div className=" bg-white ">
          <div className="flex items-center gap-5 p-4 relative  border-b">
            <Image src={product.thumbnail} width={30} height={30} />
            Similar Products
            <IoIosArrowDropright
              className=" absolute top-1/3 right-2"
              size={"1.5em"}
              color="grey"
            />
          </div>
          <div className="flex flex-wrap items-center text-black lg:gap-5 lg:justify-center">
            {products.map((prod) => (
              <Product
                key={prod.id}
                thumbnail={prod.thumbnail}
                name={prod.name}
                price={prod.price}
                reviews={prod.reviews}
                old_price={prod.old_price}
                brand={prod.brand}
                id={prod.id}
              />
            ))}
          </div>
        </div>
        <div className="mb-20 flex flex-col gap-5 bg-white p-3">
          <h2 className="mb-3">Product Highlights</h2>
          <p>Three-sided Cooling Pads </p>
          <Image
            src="https://rukminim2.flixcart.com/image/760/760/cms-rpd-images/75a124d7056540bebe6a999e84473c8d_180f59c2f47_image.jpeg?q=60"
            width={500}
            height={500}
          />
          <p className="text-sm">
            Thanks to its three-sided cooling pads, the Bajaj 24 L Personal Air
            Cooler ensures an enhanced cooling experience.
          </p>
          <p>Turbo Fan</p>
          <Image
            src="https://rukminim2.flixcart.com/image/760/760/cms-rpd-images/13c12f8d8a6f4760b8000b07a8ceed17_180f59c4e6a_image.jpeg?q=60"
            width={500}
            height={500}
          />
          <p className="text-sm">
            With its turbo fan technology, this air cooler ensures quick airflow
            at a high speed. So, you can get rapid relief from the scorching
            summer heat.
          </p>
          <p>Large Tank</p>
          <Image
            src="https://rukminim2.flixcart.com/image/760/760/cms-rpd-images/1a6734aec73b4efd9e39aa700a454bd5_180f59c8e7d_image.jpeg?q=60"
            width={500}
            height={500}
          />
          <p className="text-sm">
            Built with a large tank with a capacity of up to 24 L, this air
            cooler ensures long-lasting cooling. This way, it eliminates the
            need to frequently refill the t...
          </p>
          <p>Consistant Airflow</p>
          <Image
            src="https://rukminim2.flixcart.com/image/760/760/cms-rpd-images/77a3dc9174e945e1846861db9cecd2fd_180f59cb017_image.jpeg?q=60"
            width={500}
            height={500}
          />
          <p className="text-sm">
            With an overall area coverage of up to 69.67 sq. m (750), this air
            cooler can consistently cool down any large indoor area in no time.
          </p>
        </div>
        <div className="w-full bg-white h-20 px-4 flex items-center justify-between bottom-0 left-0 fixed">
          <BsCartPlus size={"1.8em"} />
          <button className="border rounded-md h-[60%] px-4">
            Pay with EMI
          </button>
          <button className="bg-[#FFC200] h-[60%] px-8 rounded-md">
            <a
              href={`upi://pay?pa=7029567488@ybl&pn=AkashComputer&cu=INR&am=${product.price}`}
            >
              Buy Now
            </a>
          </button>
        </div>
      </div>
      <DesktopProduct />
    </main>
  );
}

export default Page;
