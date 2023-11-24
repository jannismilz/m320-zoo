import NavItem from "../components/NavItem";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 w-full min-w-full bg-green-400">
      <ul className="m-auto flex max-w-lg justify-around p-5">
        <NavItem title="Test1" route="/" />
        <NavItem title="Test2" route="/" />
        <NavItem title="Test3" route="/" />
        <NavItem title="Test4" route="/" />
      </ul>
    </nav>
  );
}
