import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/posts">Blog</Link>
    </nav>
  );
};
export default Navigation;
