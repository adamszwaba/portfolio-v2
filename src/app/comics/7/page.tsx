import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Knitting",
  description: "I'm trying to make air knitting an official hobby",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "I'm trying to make air knitting an official hobby",
  },
};

const Page = () => {
  return (
    <article>
      <h1>Knitting</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/knitting.png"
        alt="I'm trying to make air knitting an official hobby"
        title="I'm trying to make air knitting an official hobby"
      />
    </article>
  );
};

export default Page;
