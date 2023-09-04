import { NextResponse } from "next/server";
import dbCollection from "@/services/dbCollection";

export const GET = async () => {
  const books = await dbCollection("books");

  const query = { featured: true };
  const cursor = books.find(query);
  const result = await cursor.toArray();

  return NextResponse.json(result);
};
