import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await db.user.findUnique({
      where: { clerkId: "user_2stFjHr96vkdEPTXZ84voRbjLvc" },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
