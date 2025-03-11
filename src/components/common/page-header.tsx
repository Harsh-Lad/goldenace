import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[16svh] flex justify-end items-center px-12">
      <Link href={"/"}>
        <Image
          src={"/assets/images/black-and-white-logo.png"}
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>
    </header>
  );
};

export default Header;
