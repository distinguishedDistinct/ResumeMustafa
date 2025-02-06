import { connectionSrt } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import { Form } from "@/app/lib/model/form";

export async function GET() {
  let data;
  try {
    await mongoose.connect(connectionSrt);
    data = await Form.find();
    console.log("MongoDB Connected Scessfully");
    return NextResponse.json({
      result: data,
      message: "Fetched data sucessfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Fetched data unsucessfully",
      success: false,
    });
  }
}

export async function POST(request: NextRequest) {
  const payload = await request.json(); // Getting JSON data from the request
  await mongoose.connect(connectionSrt);

  try {
    let form = new Form(payload);
    const result = await form.save();
    return NextResponse.json({ result, success: true, status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: error.message || "Failed to submit the form",
        status: 400,
      });
    }
    return NextResponse.json({
      success: false,
      message: "An unexpected error occurred",
      status: 400,
    });
  }
}
