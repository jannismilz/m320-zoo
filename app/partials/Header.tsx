import Logo from "../components/Logo";
import ProfileLink from "../components/ProfileLink";

export default function Header() {
  return (
    <div className="fixed top-0 flex min-w-full justify-between bg-red-400 p-5">
      <Logo />
      <ProfileLink avatarUrl="https://picsum.photos/60/60" username="John Doe" />
    </div>
  );
}
