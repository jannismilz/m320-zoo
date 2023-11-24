import Logo from "../components/Logo";
import ProfileLink from "../components/ProfileLink";

export default function Header() {
  return (
    <div className="fixed top-0 min-w-full bg-red-400 p-5">
      <div className="m-auto flex max-w-5xl justify-between">
        <Logo />
        <ProfileLink avatarUrl="https://picsum.photos/60/60" username="John Doe" />
      </div>
    </div>
  );
}
