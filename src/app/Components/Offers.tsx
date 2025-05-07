"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Offers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-24 p-16 bg-gray-100 rounded-3xl shadow-lg relative">

      <h2 className="text-xl font-bold absolute top-10 left-6">TRENDING OFFERS</h2>

      <button className="absolute top-10 right-6 px-4 py-2 border border-grey-500 text-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white transition">
        View All
      </button>

      {/* Scrollable Section */}
      <div className="relative mt-10">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Div */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-60 h-40 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-lg shadow-lg flex-shrink-0"
            >
              Offer {index + 1}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
