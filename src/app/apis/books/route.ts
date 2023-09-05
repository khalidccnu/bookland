import { NextRequest, NextResponse } from "next/server";
import dbCollection from "@/services/dbCollection";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const books = await dbCollection("books");

  let skip = 0,
    limit = 0;

  const countQuery = searchParams.get("count");
  const pageQuery = searchParams.get("page");
  const limitQuery = searchParams.get("limit");

  if (countQuery) {
    const countResult = await books.countDocuments();
    return NextResponse.json({ total: countResult });
  } else if (pageQuery && limitQuery) {
    let page = +pageQuery;
    limit = +limitQuery;
    skip = page * limit;
  }

  const cursor = books.find().skip(skip).limit(limit);
  const result = await cursor.toArray();

  return NextResponse.json(result);
};
