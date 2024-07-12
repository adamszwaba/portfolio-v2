import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "C Major",
  description: "*bark* *bark* *pant* *pant* *pant* TEQUILA!",
  metadataBase: new URL("https://adamszwaba.com"),
  openGraph: {
    type: "article",
    authors: ["Adam Szwaba"],
    description: "*bark* *bark* *pant* *pant* *pant* TEQUILA!",
  },
};

const Page = () => {
  return (
    <article>
      <h1>C Major</h1>
      <Image
        priority
        fill
        className="w-full !static"
        src="/static/c-major.png"
        alt="*bark* *bark* *pant* *pant* *pant* TEQUILA!"
        title="*bark* *bark* *pant* *pant* *pant* TEQUILA!"
      />
    </article>
  );
};

export default Page;
