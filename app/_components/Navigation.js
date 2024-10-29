import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-2xl">
      <ul className="flex gap-16 items-center ">
        <li>
          <Link
            href="/nests"
            className="hover:text-accent-400 transition-colors"
          >
            Nests
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
