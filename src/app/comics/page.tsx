import Link from "next/link";

const ComicsPage = () => {
  return (
    <li>
      <Link href="/comics/1">1: Law of conservation</Link>
      <Link href="/comics/2">2: CSS hacks</Link>
    </li>
  );
};

export default ComicsPage;
