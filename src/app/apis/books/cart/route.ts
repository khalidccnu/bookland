import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbCollection from "@/services/dbCollection";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const books = await dbCollection("books");
  const cart = await req.json();
  const ids = cart.map((id: string) => new ObjectId(id));

  const query = { _id: { $in: ids } };
  const cursor = books.find(query);
  const result = await cursor.toArray();

  return NextResponse.json(result);
};
