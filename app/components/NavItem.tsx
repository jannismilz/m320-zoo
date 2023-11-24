import Link from "next/link";

export default function NavItem({ title, route }: { title: string; route: string }) {
  return (
    <li>
      <Link href={route}>{title}</Link>
    </li>
  );
}
