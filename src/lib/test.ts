import { db } from "./db";

const fetchUser = async (clerkId: string) => {
  try {
    console.log("Fetching...");
    const users = await db.user.findMany();

    console.log({ users });
  } catch (error) {
    console.error("Error fetching from database", error);
  }
};

fetchUser("user_2sqVZLdTZkAA9XmQBYQaQqFtcQs");
