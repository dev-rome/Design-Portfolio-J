"use client";

import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 flex cursor-pointer items-center justify-center rounded-full bg-red-500 p-2 text-white"
      aria-label="Back to Top"
    >
      <FaArrowUp />
    </button>
  );
}
