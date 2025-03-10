import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[10svh] flex items-center px-12">
      <Link href={"/"}>
        <Image
          src={"/assets/images/black-and-white-logo.png"}
          alt="Logo"
          width={80}
          height={80}
        />
      </Link>
    </header>
  );
};

export default Header;
