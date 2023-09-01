import { NextResponse } from "next/server";
import booksCollection from "../../../../services/booksCollection";

export const GET = async () => {
  const books = await booksCollection();

  const query = { discount: true };
  const cursor = books.find(query);
  const result = await cursor.toArray();

  return NextResponse.json(result);
};
