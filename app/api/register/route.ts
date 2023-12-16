import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { name, email, password, confirmPassword } = await request.json();

    if (!name || !email || !password || password !== confirmPassword) {
      return new NextResponse("Invalid data. Please check your input.", { status: 400 });
    }

    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email is already in use. Please use a different email.", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User is registered successfully.", { status: 200 });
  } catch (error) {
    console.error("Error registering user:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
