"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdMyLocation } from "react-icons/md";
import { IoStar, IoStarHalfSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import products from "@/contents/product";
import axios from "axios";

function Checkout() {
  const pathname = usePathname().slice(10);
  const product = products.filter((prod) => prod.id == pathname)[0];
  const [customer_name, set_customer_name] = useState();
  const [customer_number, set_customer_number] = useState();
  const [customer_pincode, set_customer_pincode] = useState();
  const [customer_state, set_customer_state] = useState();
  const [customer_address, set_customer_address] = useState();
  const [user_create, set_user_create] = useState(false);
  async function store_data() {
    if (
      customer_name.length > 3 &&
      customer_number.length > 9 &&
      customer_pincode.length > 4
    ) {
      const user_create_status = await axios.post("/api/signup", {
        customer_name,
        customer_number,
        customer_address,
        customer_state,
        customer_pincode,
        amount: product.price,
      });
      set_user_create(user_create_status.data.success);
    }
  }

  return (
    <div className="text-black max-h-screen h-screen flex flex-col gap-3">
      <ul className="bg-white timeline border-b pb-4">
        <li className="w-1/3">
          <div className="timeline-middle px-2 bg-blue-600 text-white rounded-full border">
            1
          </div>
          <div className="timeline-end text-sm">Address</div>
          <hr />
        </li>
        <li className="w-1/3">
          <hr />
          <div className="timeline-middle px-2 bg-blue-600 text-white rounded-full border">
            2
          </div>{" "}
          <div className="timeline-end text-sm">Order Summary</div>
          <hr />
        </li>
        <li className="w-1/3">
          <hr />
          <div className="timeline-middle px-2 bg-blue-600 text-white rounded-full border">
            3
          </div>{" "}
          <div className="timeline-end text-sm">Payment</div>
        </li>
      </ul>

      <form
        className={`bg-white w-full py-5 px-3 flex flex-col gap-5 ${
          user_create && "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full bg-transparent border p-3"
          onChange={(e) => set_customer_name(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          required
          className="w-full bg-transparent border p-3"
          onChange={(e) => set_customer_number(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <input
            type="Number"
            placeholder="Pincode"
            required
            className="w-1/2 bg-transparent border p-3"
            onChange={(e) => set_customer_pincode(e.target.value)}
          />
          <h2 className="flex items-center gap-1 bg-blue-600 text-white py-3 px-2 rounded-md">
            <MdMyLocation />
            use my location
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <select
            className="w-1/2 bg-transparent border p-3"
            onChange={(e) => set_customer_state(e.target.value)}
          >
            <option value="" disabled selected>
              Select State
            </option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CT">Chhattisgarh</option>
            <option value="GA">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="GA">Goa</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UT">Uttarakhand</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="WB">West Bengal</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="CH">Chandigarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="LD">Lakshadweep</option>
            <option value="PY">Puducherry</option>
          </select>
          <input
            type="text"
            placeholder="City"
            required
            className="w-1/2 bg-transparent border p-3"
          />
        </div>
        <input
          type="text"
          placeholder="House No, Building Name"
          required
          className="w-full bg-transparent border p-3"
          onChange={(e) => set_customer_address(e.target.value)}
        />
        <input
          type="text"
          placeholder="Road Name, Area, Colony"
          required
          className="w-full bg-transparent border p-3"
        />
        <button
          className="bg-[#FF5800] text-white py-3"
          onClick={(e) => {
            e.preventDefault();
            store_data();
          }}
        >
          Save Address
        </button>
      </form>

      <div className={`relative ${!user_create && "hidden"}`}>
        <div className="w-full bg-white p-3 ">
          <div className="flex flex-col gap-3 relative">
            <h2>Deliver to:</h2>
            <h2 className="font-semibold">{customer_name}</h2>
            <p>
              {`${customer_address}, ${customer_pincode}, ${customer_state}`}
            </p>
            <p
              className=" absolute top-0 right-2 border text-blue-700 p-2"
              onClick={() => set_user_create(false)}
            >
              Change
            </p>
          </div>
        </div>
        <div className="w-full bg-white flex gap-8 p-5 border-y">
          <div className=" w-1/3 h-20 relative">
            <Image src={product.thumbnail} fill />
          </div>
          <div>
            <h2>{product.name}</h2>
            <div className="my-2 flex gap-1 items-center">
              <IoStar color="green" />
              <IoStar color="green" />
              <IoStar color="green" />
              <IoStar color="green" />
              <IoStarHalfSharp color="green" />
              <p className="text-xs text-blue-600">{product.reviews} ratings</p>
            </div>
            <p className="text-xs text-slate-500">
              1k bought in the last 15 days{" "}
            </p>
            <h2 className="my-2 font-semibold text-sm">
              {" "}
              <span className="text-green-800">95% off</span>
              <span className="text-slate-500 line-through mx-2">
                ₹{product.old_price}
              </span>
              <span className=" text-base">₹{product.price}</span>
            </h2>
            <p className="text-xs text-green-800 font-semibold">
              2 offer applied · 1 offer available
            </p>
          </div>
        </div>

        <div className="p-5 bg-white flex flex-col gap-3">
          <h2>Price Details</h2>
          <p className="w-full flex items-center justify-between">
            <span className="text-sm">Price</span>{" "}
            <span>₹{product.old_price}</span>
          </p>
          <p className="w-full flex items-center justify-between">
            <span className="text-sm">Discount</span>{" "}
            <span className="text-green-700 text-sm font-semibold">
              ₹ -{product.old_price - product.price}
            </span>
          </p>
          <p className="w-full flex items-center justify-between">
            <span className="text-sm">Delivery Charges</span>{" "}
            <span className="text-green-700 text-sm font-semibold">
              Free Delivery
            </span>
          </p>
          <p className="w-full flex items-center justify-between">
            <span className="text-sm">Total Amount</span>{" "}
            <span>₹{product.price}</span>
          </p>
          <p className="text-sm mt-4 text-green-700">
            You will save ₹{product.old_price - product.price} on this ordered
          </p>
        </div>
        <div className="flex py-5 justify-center mb-16 items-center gap-2 bg-[#F1F2F4]">
          <Image
            src="https://rukminim1.flixcart.com/www/52/64/promos/13/02/2019/9b179a8a-a0e2-497b-bd44-20aa733dc0ec.png?q=60"
            width={30}
            height={30}
          />
          <p className="text-xs">
            Safe and secure payments. Easy returns. <br /> 100% Authentic
            products.
          </p>
        </div>
        <div className=" fixed bottom-0 left-0 w-full bg-white flex justify-between items-center px-5 py-3">
          <div>
            <h2 className="text-sm text-slate-500 line-through">
              ₹{product.old_price}
            </h2>
            <h2 className="font-semibold text-base">₹{product.price}</h2>
          </div>
          <button className="bg-[#FFC200] px-6 rounded-md py-2">
            <a
              href={`upi://pay?pa=rimobairagya@axl&pn=RimoBairagya&cu=INR&am=${product.price}`}
            >
              Continue
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
