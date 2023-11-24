import Logo from "../components/Logo";
import ProfileLink from "../components/ProfileLink";

export default function Header() {
  return (
    <div className="flex justify-between bg-red-400 p-5">
      <Logo />
      <ProfileLink avatarUrl="https://picsum.photos/60/60" username="John Doe" />
    </div>
  );
}
