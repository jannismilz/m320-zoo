import Image from "next/image";
import NextLogo from "../../public/next.svg";

export default function Logo() {
  // TODO: Logo path
  return <Image src={NextLogo} width={100} height={500} alt="Zoo Logo" />;
}
