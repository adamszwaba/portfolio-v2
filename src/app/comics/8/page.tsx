import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Little things",
  description: "I'm going to consider a career in golf for the next couple of days and then completely forget about it",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "I'm going to consider a career in golf for the next couple of days and then completely forget about it",
  },
};

const Page = () => {
  return (
    <article>
      <h1>The Little things</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/little-things.png"
        alt="I'm going to consider a career in golf for the next couple of days and then completely forget about it"
        title="I'm going to consider a career in golf for the next couple of days and then completely forget about it"
      />
    </article>
  );
};

export default Page;
