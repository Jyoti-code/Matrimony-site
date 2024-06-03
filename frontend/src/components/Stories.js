import React, { useState } from "react";

export default function Stories() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center mt-8 mb-4 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Over 10,000+ Happy Stories
        </h1>
        <p className="text-md text-gray-600 mb-5 p-4">
          If like thousands of couples, you too met your one-and-only on
          Sukhvivah.com, we'd love to hear all about it. It's our favorite
          part of what we do!
        </p>
      </div>

      <div
        id="default-carousel"
        className="relative w-full mb-4"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden rounded-lg flex justify-center items-center">
          {/* Item 1 */}
          <div
            className={`absolute w-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
              currentSlide === 0 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <div className="max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-200 dark:border-slate-200 flex flex-col md:flex-row items-center">
              {/* Left section for text */}
              <div className="flex-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 text-center md:text-left">
                  "We are loved by our family, friends and well-wishers yet we
                  still seek to be loved by that special someone. Why? There
                  comes a point in life when you want a companion to spend the
                  journey of life with, someone who loves you immensely,
                  shares little things with you and makes you their priority.
                  "The fact that he is loving and protective of me, makes me
                  feel so...
                </p>
              </div>
              {/* Right section for image */}
              <div className="flex-1 flex justify-center ml-2 mt-4 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Couple"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div
            className={`absolute w-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
              currentSlide === 1 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <div className="max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-200 dark:border-slate-200 flex flex-col md:flex-row items-center">
              {/* Left section for text */}
              <div className="flex-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 text-center md:text-left">
                  "It was a sudden downpour in the city of Thane. The roads
                  were blocked and the local trains and buses were stopped for
                  the next few hours. People were panicking, except Ameya and
                  Shruti. Well, they were mesmerized with each other at that
                  moment. "We were sitting near the lake having this amazing
                  conversation. Shruti was about leave but the unexpected...
                </p>
              </div>
              {/* Right section for image */}
              <div className="flex-1 flex justify-center ml-2 mt-4 md:mt-0">
                <img
                  src="https://cdn0.weddingwire.in/article/0767/original/1280/jpg/27670-indian-newly-married-couple-snapsoulindia-support.jpeg"
                  alt="Couple"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div
            className={`absolute w-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
              currentSlide === 2 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <div className="max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-200 dark:border-slate-200 flex flex-col md:flex-row items-center">
              {/* Left section for text */}
              <div className="flex-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 text-center md:text-left">
                  "Getting married to the love of your life is the best thing
                  in the world. It's all about finding the right partner and
                  Yogesh from this story says that MarathiMatrimony played
                  cupid in helping him find his soulmate Tejasvi. They
                  instantly connected and developed a great understanding even
                  before meeting. I start the conversation by....
                </p>
              </div>
              {/* Right section for image */}
              <div className="flex-1 flex justify-center ml-2 mt-4 md:mt-0">
                <img
                  src="https://cliqnclix.com/wp-content/uploads/2023/03/CC01036WM.jpg"
                  alt="Couple"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div
            className={`absolute w-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
              currentSlide === 3 ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <div className="max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-200 dark:border-slate-200 flex flex-col md:flex-row items-center">
              {/* Left section for text */}
              <div className="flex-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 text-center md:text-left">
                  "A vibrant Aaditi talks about her first meeting with Nikhil,
                  "The moment we met, we saw each other and smiled, but it
                  took some time for us to start speaking. We both were a
                  little confused that day, but we met again after a week in a
                  coffee shop, and hit it off. Even though we felt a sense of
                  comfort despite the silences in our first meet, it was the
                  second time...
                </p>
              </div>
              {/* Right section for image */}
              <div className="flex-1 flex justify-center ml-2 mt-4 md:mt-0">
                <img
                  src="https://img.freepik.com/premium-photo/celebration-young-indian-married-couple-dancing-happy-together-happiness-commitment-love-with-relationship-marriage-smiling-people-dance-ceremony-special-event-with-sari_590464-180327.jpg"
                  alt="Couple"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
