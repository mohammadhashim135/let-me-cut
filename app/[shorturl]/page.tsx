// import { redirect } from "next/navigation";

// export default function RedirectPage({ params }: { params: { shorturl: string } }) {
//   if (params.shorturl === "myportfolio") {
//     redirect("https://mohammadhashim.vercel.app/");
//   }

//   return <p>Not Found</p>;
// }

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function RedirectPage({ params }: { params: { shorturl: string } }) {
  console.log(" Params:", params.shorturl);

  const client = await clientPromise;
  const record = await client.db("letmecut").collection("url")
    .findOne({ shortUrl: params.shorturl });
  console.log("Record:", record);

  if (record?.originalUrl) {
    redirect(record.originalUrl);
  }

  return <p>Not Found</p>;
}
