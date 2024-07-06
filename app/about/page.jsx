import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">
          WHO ARE WE?
        </h1>
      </div>
      <div className="container ">
        <div className="py-4 lg:py-14">
          <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">
            Innovative Construction & Design Solutions
          </h2>
          <p className="text-2xl font-medium lg:w-1/2">
            Diamond Q Construction is a leading firm specializing in
            construction and interior design for homes, offices, and apartments.
            We are committed to delivering superior construction and design
            solutions that adhere to our high standards of excellence. Our
            skilled team leverages extensive expertise to innovate and excel in
            every project.
          </p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          <div className="w-full">
            <Image
              src="/image/gallery1123.jpg"
              width={700}
              height={700}
              alt=""
              className=""
            />
          </div>
          <div className="">
            <p className="pb-8 tracking-wide">
              We are a globally recognized architecture firm at Diamond Q
              Construction. We believe in the essential need to fundamentally
              transform architectural education today. Our approach, Confluence,
              merges innovative societal perspectives with modern methods and
              tools in creativity, production, and communication. Designed
              meticulously and crafted by hand, our unique unfolding box is
              tailored to present and protect our Year Two architecture
              portfolio, showcasing our commitment to blending traditional
              techniques with avant-garde design.
              <br />
              <br />
              We are international architects committed to fundamentally
              rethinking architectural education. Our Confluence approach
              integrates new societal visions with innovative methods and
              contemporary tools in creativity, production, and communication.
              <br />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                The Diamond Q, we share a belief in the transformational power
                of people united in a common purpose.
              </span>
            </p>
            {/* <Link
              className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
              href="/contact"
            >
              Read More <TbArrowUpRight className="text-xl" />{" "}
            </Link> */}
          </div>
        </div>
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-wider text-center">
              TEAM
            </h1>
          </div>
          <div className="grid gap-20 py-8 lg:grid-cols-3">
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/profile1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">Shelly Lin</h2>
                <p className="text-sm text-gray-400">Executive Director</p>
              </div>
            </div>
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/shifu.webp"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">Shi Fu</h2>
                <p className="text-sm text-gray-400">Construction Director</p>
              </div>
            </div>
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/charles_selfie_square.jpeg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">Charles Zhang</h2>
                <p className="text-sm text-gray-400">
                  Creative Director, Designer, Software Developer, Web Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
