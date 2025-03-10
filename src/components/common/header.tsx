import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[10svh] flex items-center px-12">
      <Image
        src={"/assets/images/black-and-white-logo.png"}
        alt="Logo"
        width={80}
        height={80}
      />
    </header>
  );
};

export default Header;
