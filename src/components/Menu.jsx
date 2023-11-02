import Link from "next/link";

export default function Menu() {
  return (
    <nav className=" flex gap-4">
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <Link href="/henry" prefetch={false}>
        Henry
      </Link>
    </nav>
  );
}
