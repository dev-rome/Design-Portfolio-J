import Image from "next/image";

import { GalleryProps } from "@/types";
import { galleryItems } from "@/constants/galleryItems";

const GalleryItem = ({ src, alt, title }: GalleryProps) => {
  return (
    <div className="group relative xl:cursor-pointer">
      <div className="absolute inset-0 bg-[#868e96] opacity-0 transition-opacity duration-300 group-hover:opacity-65"></div>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="h-auto w-full"
      />
      <div className="absolute inset-0 mt-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="font-bold xl:text-2xl">{title}</h2>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <section className="col-span-4 mt-10 px-4 md:col-start-3 md:col-end-13 md:mt-0">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        {galleryItems.map(({ id, src, alt, title }) => (
          <GalleryItem
            key={id}
            src={src}
            alt={alt}
            title={title}
          />
        ))}
      </div>
    </section>
  );
}
