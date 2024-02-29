import Image from "next/image";

import { GalleryProps } from "@/types";
import { galleryItems } from "@/constants/galleryItems";

const GalleryItem = ({ src, alt, title, description }: GalleryProps) => {
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
      <div className="absolute inset-0 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:p-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <section className="col-span-4 mt-10 md:col-start-3 md:col-end-13 md:mt-0">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        {galleryItems.map(({ id, src, alt, title, description }) => (
          <GalleryItem
            key={id}
            src={src}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
