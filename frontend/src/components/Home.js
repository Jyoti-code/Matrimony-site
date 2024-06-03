import React from "react";
import ButtonWrapper from "./ButtonWrapper";

export default function Home() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col h-screen md:flex-row">
      {/* Image container */}
      <div className="w-full h-screen md:w-1/2">
        <img
          className="object-cover h-full w-full"
          src="https://akshitphotography.com/wp-content/uploads/2023/08/15-1-1024x683.jpg"
          alt="Full-screen"
        />
      </div>
      {/* Text container */}
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center w-full md:w-1/2 p-8"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/elegant-bride-jewellery-with-copy-space_23-2148468618.jpg?w=360&t=st=1715531384~exp=1715531984~hmac=bfed0f3c2672e27c8edf36fcda6fbed9def7300ddfd2e4d2c4a12474448dd704')",
          backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height:'100vh'
        }}
      >
        <div className=" bg-opacity-50 absolute inset-0"></div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Discover Your
        </h1>
        <h4 className="text-3xl md:text-4xl font-bold text-red-500 mb-4 text-center md:text-left">
          Forever Love Story
        </h4>
        <p className="text-sm md:text-md text-black-200 mb-6 text-center md:text-left">
          Find your perfect match and start your journey of love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

          <div>
          <ButtonWrapper/>
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800 w-full md:w-auto"
              onClick={()=>navigate('/login')}
            >
              Login
            </button> */}
          </div>
          {/* <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 w-full md:w-auto"
            >
              Sign up
            </button>
          </div> */}
        </div>
        
      </div>
    </div>
    </div>
  );
}
