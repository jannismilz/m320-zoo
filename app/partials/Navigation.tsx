import NavItem from "../components/NavItem";

export default function Navigation() {
  return (
    <nav>
      <ul className="fixed bottom-0 m-auto flex min-w-full max-w-sm justify-around bg-red-400 p-5">
        <NavItem title="Test1" route="/" />
        <NavItem title="Test2" route="/" />
        <NavItem title="Test3" route="/" />
        <NavItem title="Test4" route="/" />
      </ul>
    </nav>
  );
}
