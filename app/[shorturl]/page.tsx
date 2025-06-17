import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function RedirectPage({ params }: { params: { shorturl: string } }) {
  const shortUrl = params.shorturl;

  try {
    const client = await clientPromise;
    const db = client.db("letmecut");
    const collection = db.collection("url");

    const record = await collection.findOne({ shortUrl });

    if (record && record.originalUrl) {
      // Redirect to the original URL
      redirect(record.originalUrl);
    } else {
      // Redirect to a custom 404 or error page if not found
      redirect("/not-found");
    }
  } catch (error) {
    console.error("Redirection error:", error);
    redirect("/error");
  }
}
