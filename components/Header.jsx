import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";
import Link from "next/link";
export default function Header() {
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-30 bg-zinc-50 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-8 ">
        <div className="logo_container flex flex-row gap-x-4">
          <Image src={logo} alt="logo" className="w-10 h-10" />
          <span className="flex items-center text-2xl">
            <Link href="/">Diamond Q Construction</Link>
          </span>
        </div>

        <Navigation />
      </div>
    </div>
  );
}
