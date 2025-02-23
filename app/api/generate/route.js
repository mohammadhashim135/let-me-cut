import clientPromise from "@/lib/mongodb";
import { nanoid } from "nanoid"; 

export async function POST(request) {
  try {
    const body = await request.json();

    // Ensure the long URL is provided
    if (!body.url) {
      return Response.json({ success: false, error: true, message: "URL is required" });
    }

    // Generate a random short URL if custom alias is not provided
    const shortUrl = body.shortUrl?.trim() || nanoid(6); // Generates a 6-character short ID

    const client = await clientPromise;
    const db = client.db("letmecut");
    const collection = db.collection("url");

    // Check if custom alias already exists
    const existing = await collection.findOne({ shortUrl });
    if (existing) {
      return Response.json({ success: false, error: true, message: "Short URL already taken" });
    }

   
    return Response.json({
      success: true,
      error: false,
      message: "URL generated successfully",
      data: { shortUrl }, // Ensure correct short URL is sent back
    });
  } catch (error) {
    console.error("Error inserting into MongoDB:", error);
    return Response.json({ success: false, error: true, message: "Server error" });
  }
}
