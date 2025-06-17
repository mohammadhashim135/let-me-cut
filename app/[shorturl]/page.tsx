// app/[shorturl]/page.tsx

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function RedirectPage({ params }: { params: { shorturl: string } }) {
  const shortUrl = params.shorturl;

  try {
    const client = await clientPromise;
    const db = client.db("letmecut");
    const collection = db.collection("url");

    const record = await collection.findOne({ shortUrl });

    if (record?.originalUrl) {
      let originalUrl = record.originalUrl;

      if (!/^https?:\/\//.test(originalUrl)) {
        originalUrl = `https://${originalUrl}`;
      }

      redirect(originalUrl);
    } else {
      redirect("/not-found");
    }
  } catch (error) {
    console.error("Redirection error:", error);
    redirect("/error");
  }
}
