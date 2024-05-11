import dbConnect from "@/lib/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    customer_name,
    customer_number,
    customer_address,
    customer_pincode,
    customer_state,
    amount,
  } = await req.json();
  try {
    dbConnect();
    const existing_user = await User.findOne({ customer_number });
    if (!existing_user) {
      console.log("enter");
      const user_create_res = await User.create({
        customer_name,
        customer_number,
        customer_address,
        customer_state,
        customer_pincode,
        amount,
      });
      return NextResponse.json(
        {
          user_create_res,
          success: true,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        massage: "user alredy created",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}
