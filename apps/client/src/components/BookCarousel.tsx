"use client";

import { Swiper, SwiperSlide } from "swiper/react"; //using Swiper for the carousel

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import "@workspace/tailwind/globals.css";

const books = [
  { title: "Book 1", img: "/Psycology_of_Money.jpg" },
  { title: "Book 2", img: "/Psycology_of_Money.jpg" },
  { title: "Book 3", img: "/Psycology_of_Money.jpg" },
  { title: "Book 4", img: "/Psycology_of_Money.jpg" }, //test data
  { title: "Book 5", img: "/Psycology_of_Money.jpg" },
  { title: "Book 6", img: "/Psycology_of_Money.jpg" },
  { title: "Book 7", img: "/Psycology_of_Money.jpg" },
  { title: "Book 8", img: "/Psycology_of_Money.jpg" },
];

export default function BookCarousel() {
  return (
    <div className="bg-secondary flex w-full justify-center py-8">
      <Swiper
        effect="coverflow" // Enables the "coverflow" effect
        grabCursor={true} // Shows a grab cursor to indicate swiping
        centeredSlides={false}
        slidesPerView={3} // Shows 3 slides at a time
        spaceBetween={30} // 30px space between each slide
        coverflowEffect={{
          rotate: 0, // No rotation on slides
          stretch: 0, // No horizontal stretch
          depth: 150, // Adds depth (z-axis distance)
          modifier: 2.5,
          slideShadows: false, // Disables slide shadows
        }}
        autoplay={{
          delay: 1000, // time between slides in milliseconds
          disableOnInteraction: false, //auto-follow after interacting
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-4xl"
      >
        {books.map((book, index) => (
          <SwiperSlide //sliders
            key={index}
            className="h-60 w-40 md:h-72 md:w-48 lg:h-80 lg:w-56"
          >
            <img
              src={book.img}
              alt={book.title}
              className="h-full w-full rounded-xl object-cover shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
