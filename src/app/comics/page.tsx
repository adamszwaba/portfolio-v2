import Link from "next/link";

const ComicsPage = () => {
  return (
    <ul className="flex flex-col">
      <Link href="/comics/1">1: Law of conservation</Link>
      <Link href="/comics/2">2: CSS hacks</Link>
      <Link href="/comics/3">3: Hospitality</Link>
      <Link href="/comics/4">4: Inner Child</Link>
      <Link href="/comics/5">5: C Major</Link>
      <Link href="/comics/6">6: Sandcastles </Link>
      <Link href="/comics/7">7: Knitting</Link>
      <Link href="/comics/8">8: The Little Things</Link>
      <Link href="/comics/9">9: Internal Jukebox</Link>
    </ul>
  );
};

export default ComicsPage;
