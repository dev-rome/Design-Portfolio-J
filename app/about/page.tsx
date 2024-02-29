import Image from "next/image";

import PersonalImage from "../../public/assets/images/test-person-img.jpg";

export default function About() {
  return (
    <section className="col-span-4 py-10 md:col-start-3 md:col-end-13">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold md:text-xl">I'm John Murillo</h1>

        <p className="my-3 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at
          erat pellentesque adipiscing commodo elit.
        </p>

        <p className="font-bold">Contact me: test-email@gmail.com</p>

        <Image
          src={PersonalImage}
          alt="John Murillo"
          width={500}
          height={500}
          className="mt-5"
        />
      </div>
    </section>
  );
}
