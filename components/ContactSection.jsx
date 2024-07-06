import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";
export default function ContactSection() {
  return (
    <div className="bg-zinc-100">
      <div className="container items-center text-center border-b-2 lg:justify-between lg:flex py-14">
        <div className="py-4">
          <p className="text-2xl">Lets</p>
          <h1 className="text-3xl font-medium lg:text-6xl">Get in touch</h1>
        </div>
        {/* <a
          className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
          href="/contact"
        >
          CONTACTUS <TbArrowUpRight className="text-xl" />{" "}
        </a> */}
        <Link
          href="/contact"
          className="relative inline-block font-medium group py-1.5 px-2.5 "
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-gray-600 group-hover:bg-gray-100"></span>
          <span className="relative flex flex-row items-center text-gray-800 ">
            Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
          </span>
        </Link>
      </div>
    </div>
  );
}
