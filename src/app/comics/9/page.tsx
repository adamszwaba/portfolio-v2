import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Internal Jukebox",
  description: "When life gives you a tune, you BELT IT ALL OUT",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "When life gives you a tune, you BELT IT ALL OUT",
  },
};

const Page = () => {
  return (
    <article>
      <h1>Internal Jukebox</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/internal-jukebox.png"
        alt="When life gives you a tune, you BELT IT ALL OUT"
        title="When life gives you a tune, you BELT IT ALL OUT"
      />
    </article>
  );
};

export default Page;
