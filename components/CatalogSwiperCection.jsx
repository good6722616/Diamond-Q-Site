"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28 bg-zinc-50">
      <div className="container grid pb-8 lg:grid-cols-2">
        <div className="text-left ">
          <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Classic
          </h1>
        </div>
        <div>
          <h2 className="pb-6 text-xl font-bold tracking-wider">
            Building Excellence in Every Home
          </h2>
          <div className="grid grid-cols-2 text-gray-500 gap-x-8">
            <div>
              <p>
                At Diamond Q Construction, our dedication to craftsmanship and
                modern design ensures every project we undertake transforms a
                house into your dream home.
              </p>
            </div>
            <div>
              <p>
                We combine timeless techniques with contemporary innovations to
                deliver spaces that are not only beautiful but also durable and
                functional.
              </p>
              {/* <a
                href="/gallery"
                className="inline-flex items-center pt-4 text-lg font-bold text-black underline"
              >
                View Gallery <TbArrowUpRight />{" "}
              </a> */}
              {/* <Link
                className="inline-flex items-center pt-4 text-lg font-bold text-black underline"
                href="/gallery"
              >
                View Gallery
              </Link> */}
              <Link
                href="/gallery"
                className="relative inline-block font-medium group mt-3 py-1.5 px-2.5 "
              >
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-gray-600 group-hover:bg-gray-100"></span>
                <span className="relative flex flex-row items-center text-gray-800 ">
                  View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
