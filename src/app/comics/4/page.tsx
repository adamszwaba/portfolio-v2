import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inner Child",
  description:
    "Based on my experience bringing up my inner child, I'm not certain I should take on another",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description:
      "Based on my experience bringing up my inner child, I'm not certain I should take on another",
  },
};

const Page = () => {
  return (
    <article>
      <h1>Inner Child</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/inner-child.png"
        alt="Based on my experience bringing up my inner child, I'm not certain I should take on another"
        title="Based on my experience bringing up my inner child, I'm not certain I should take on another"
      />
    </article>
  );
};

export default Page;
