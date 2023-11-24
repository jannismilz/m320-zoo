import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ProfileLink({
  avatarUrl,
  username,
}: {
  avatarUrl: string;
  username: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full"
        src={avatarUrl}
        width={30}
        height={30}
        alt="Profile image"
      />
      <span className="hidden md:inline-block">{username}</span>
      <ChevronDownIcon height={15} width={15} />
    </div>
  );
}
