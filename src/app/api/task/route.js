import { db } from "@/util/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const response = await db();
  console.log(response, "connection response");
  return NextResponse.json({
    message: "Data Fetch successfully",
    success: true,
  });
};

export const POST = async (req) => {
  const response = await db();
  console.log(response, "connection response");
  //   const sampleData = {
  //     title: "Sample Title",
  //     description: "Sample description",
  //     isChecked: false,
  //     isCreated: Date.now(),
  //     createdBy: "akshay",
  //   };
  const finalData = req.body;
  console.log(finalData, "finalData");
  const data = response.tasks.insertOne(finalData);
  console.log(data, "data");
  return NextResponse.json(
    {
      message: "Data created successfully",
      success: true,
    },
    { status: 201 }
  );
};
