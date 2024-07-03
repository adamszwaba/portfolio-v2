import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Law of preservation",
  description: "pv=nRT might have been the best dating advice I've ever gotten",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description:
      "pv=nRT might have been the best dating advice I've ever gotten",
  },
};

export default () => {
  return (
    <article>
      <h1>Law of preservation</h1>
      <Image
        width={1200}
        height={1400}
        className="mx-auto rounded"
        src="/static/law-of-preservation.png"
        alt="pv=nRT might have been the best dating advice I've ever gotten"
        title="pv=nRT might have been the best dating advice I've ever gotten"
      />
    </article>
  );
};
