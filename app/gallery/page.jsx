import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            src="/image/badroom.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery2.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/swiper1.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery11.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/living.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery14.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery15.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery12.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery7.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery11.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image/gallery3.jpg"
            alt=""
            width={500} // Provide appropriate width
            height={500} // Provide appropriate height
          />
        </div>
      </div>
    </div>
  );
}
