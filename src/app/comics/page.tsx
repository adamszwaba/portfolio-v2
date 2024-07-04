import Link from "next/link";

const ComicsPage = () => {
  return (
    <ul className="flex flex-col">
      <Link href="/comics/1">1: Law of conservation</Link>
      <Link href="/comics/2">2: CSS hacks</Link>
    </ul>
  );
};

export default ComicsPage;
