import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sandcastles",
  description: "The least believable part of this is paying with cash",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "The least believable part of this is paying with cash",
  },
};

const Page = () => {
  return (
    <article>
      <h1>Sandcastles</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/Sandcastles.png"
        alt="The least believable part of this is paying with cash"
        title="The least believable part of this is paying with cash"
      />
    </article>
  );
};

export default Page;
