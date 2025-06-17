import clientPromise from "@/lib/mongodb";
import { nanoid } from "nanoid";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url) {
      return Response.json({ success: false, error: true, message: "URL is required" });
    }

    const shortUrl = body.shortUrl?.trim() || nanoid(6);

    const client = await clientPromise;
    const db = client.db("letmecut");
    const collection = db.collection("url");

    // Check if custom alias already exists
    const existing = await collection.findOne({ shortUrl });
    if (existing) {
      return Response.json({ success: false, error: true, message: "Short URL already taken" });
    }

    // ✅ INSERT the originalUrl and shortUrl
    await collection.insertOne({
      shortUrl,
      originalUrl: body.url,
      createdAt: new Date()
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL generated successfully",
      data: { shortUrl },
    });

  } catch (error) {
    console.error("Error inserting into MongoDB:", error);
    return Response.json({ success: false, error: true, message: "Server error" });
  }
}
