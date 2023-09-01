import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;

const dbConnect = async (): Promise<Db> => {
  if (db) return db;

  try {
    const mdbClient = new MongoClient(process.env.MONGODB_URI!, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = mdbClient.db("bookland");

    await mdbClient
      .db("admin")
      .command({ ping: 1 })
      .then(() => console.log("Successfully connected to MongoDB!"));

    return db;
  } catch (err) {
    if (err instanceof Error) {
      console.log("Did not connect to MongoDB! " + err.message);
      throw err;
    } else {
      console.log("An unknown error occurred!");
      throw new Error("Unknown error!");
    }
  }
};

export default dbConnect;
