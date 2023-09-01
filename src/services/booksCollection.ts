import { Db, Collection } from "mongodb";
import dbConnect from "@/services/dbConnect";

const booksCollection = async (): Promise<Collection> => {
  try {
    const db: Db = await dbConnect();
    return db.collection("books");
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error accessing the books collection! " + err.message);
      throw err;
    } else {
      console.log("An unknown error occurred!");
      throw new Error("Unknown error!");
    }
  }
};

export default booksCollection;
