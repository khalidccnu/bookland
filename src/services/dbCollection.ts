import { Db, Collection } from "mongodb";
import dbConnect from "@/services/dbConnect";

const dbCollection = async (collection: string): Promise<Collection> => {
  try {
    const db: Db = await dbConnect();
    return db.collection(collection);
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Error accessing the ${collection}! ${err.message}`);
      throw err;
    } else {
      console.log("An unknown error occurred!");
      throw new Error("Unknown error!");
    }
  }
};

export default dbCollection;
