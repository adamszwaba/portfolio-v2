import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Law of conservation",
  description: "pv=nRT might have been the best dating advice I've ever gotten",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description:
      "pv=nRT might have been the best dating advice I've ever gotten",
  },
};

const Page = () => {
  return (
    <article>
      <h1>Law of conservation</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/law-of-conservation.png"
        alt="pv=nRT might have been the best dating advice I've ever gotten"
        title="pv=nRT might have been the best dating advice I've ever gotten"
      />
    </article>
  );
};

export default Page;
