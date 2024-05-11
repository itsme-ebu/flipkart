import React from "react";
import { MdMyLocation } from "react-icons/md";

function Checkout() {
  return (
    <div className="bg-white text-black max-h-screen h-screen">
      <ul className="timeline border-b pb-4">
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

      <form className=" w-full py-5 px-3 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full bg-transparent border p-3"
        />
        <input
          type="number"
          placeholder="Phone Number"
          required
          className="w-full bg-transparent border p-3"
        />
        <div className="flex items-center gap-2">
          <input
            type="Number"
            placeholder="Pincode"
            required
            className="w-1/2 bg-transparent border p-3"
          />
          <h2 className="flex items-center gap-1 bg-blue-600 text-white py-3 px-2 rounded-md">
            <MdMyLocation />
            use my location
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <select className="w-1/2 bg-transparent border p-3">
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
        />
        <input
          type="text"
          placeholder="Road Name, Area, Colony"
          required
          className="w-full bg-transparent border p-3"
        />
        <button className="bg-[#FF5800] text-white py-3">Save Address</button>
      </form>
    </div>
  );
}

export default Checkout;
