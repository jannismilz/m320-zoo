import { HomeIcon } from "@heroicons/react/24/outline";
import NavItem from "../components/NavItem";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 w-full min-w-full bg-green-400">
      <ul className="m-auto flex max-w-lg justify-around p-5">
        <NavItem icon="home" route="/" />
        <NavItem icon="tickets" route="/" />
        <NavItem icon="map" route="/" />
        <NavItem icon="animals" route="/" />
      </ul>
    </nav>
  );
}
