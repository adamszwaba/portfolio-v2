import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hospitality",
  description: "Revenge is dish best served dysfunctional",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "Revenge is dish best served dysfunctional",
  },
};

const Page = () => {
  return (
    <article>
      <h1>Hospitality</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/hospitality.png"
        alt="Revenge is dish best served dysfunctional"
        title="Revenge is dish best served dysfunctional"
      />
    </article>
  );
};

export default Page;
