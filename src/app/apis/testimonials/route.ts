import { NextResponse } from "next/server";
import dbCollection from "@/services/dbCollection";

export const GET = async () => {
  const testimonials = await dbCollection("testimonials");

  const cursor = testimonials.find();
  const result = await cursor.toArray();

  return NextResponse.json(result);
};
