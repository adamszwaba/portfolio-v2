import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CSS hacks",
  description: "<div center=true> should just work out of the box",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "<div center=true> should just work out of the box",
  },
};

const Page = () => {
  return (
    <article>
      <h1> CSS hacks </h1>
      <Image
        priority
        width={1200}
        height={4800}
        className="mx-auto rounded"
        src="/static/css-hacks.png"
        alt="<div center=true> should just work out of the box"
        title="<div center=true> should just work out of the box"
      />
    </article>
  );
};

export default Page;
