import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="bg-zinc-50">
      <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <p className="tracking-widest">We Build Your Dreams</p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-5xl lg:text-4xl">
            Creating Spaces That Last
          </h1>
          <p className="pb-6 text-gray-500 xl:pb-10">
            Transform your vision into reality with Diamond Q Construction.
            <br />
            We provide superior construction services from the initial design to
            the final details, ensuring quality and precision in every project.
            <br />
            Experience the difference with our commitment to excellence and
            customer satisfaction.
          </p>
          {/* <Link href="/contact">
            <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
              Contact Us
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </button>
          </Link> */}
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

        <div className="w-1/2">
          <Image
            src="/image/kitchen.png"
            width={800}
            height={500}
            alt=""
            className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
