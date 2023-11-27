import {
  HomeIcon,
  MapPinIcon,
  RectangleStackIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  MapPinIcon as MapPinIconSolid,
  RectangleStackIcon as RectangleStackIconSolid,
  TicketIcon as TicketIconSolid,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NavItem({ icon, route }: { icon: string; route: string }) {
  let itemIcon;
  const width = 30;
  const height = 30;

  switch (icon) {
    case "home":
      itemIcon = <HomeIcon width={width} height={height} />;
      break;
    case "tickets":
      itemIcon = <TicketIcon width={width} height={height} />;
      break;
    case "map":
      itemIcon = <MapPinIcon width={width} height={height} />;
      break;
    case "animals":
      itemIcon = <RectangleStackIcon width={width} height={height} />;
      break;
  }

  return (
    <li>
      <Link href={route}>{itemIcon}</Link>
    </li>
  );
}
