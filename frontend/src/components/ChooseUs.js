import React from "react";

export default function Choose() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="text-center md:text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-8">
            Why Choose Us?
          </h1>
          <p className="text-xl md:text-xl text-gray-600 mb-5">
            Genuine Profiles | Safe & Secure | Detailed Family Information
          </p>
        </div>
      </div>

      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-center items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2  order-2 md:order-1">
          <div className="text-center md:text-left p-10">
            <div className="flex items-center mb-7">
              <img
                src="https://img2.sangam.com/assets/home-page-new/family-info-d.svg"
                alt="stories"
                width="50"
                height="50"
              />
              <div className="ml-4">
                <div className="text-xl font-bold">
                  Get Complete Family Information
                </div>
                <div className="text-gray-600 mt-2">
                  You will find detailed family information in every profile.
                  Knowing the family will help you take the next step with
                  confidence.
                </div>
              </div>
            </div>

            <div className="flex items-center mb-7">
              <img
                src="https://img2.sangam.com/assets/home-page-new/community-matches-d.svg"
                alt="stories"
                width="50"
                height="50"
              />
              <div className="ml-4">
                <div className="text-xl font-bold">
                Get Matches from your Community
                </div>
                <div className="text-gray-600 mt-2">
                With over 80 community sites, you can find a Match from your community. Finding a Match based on caste and religion made easy.
                </div>
              </div>
            </div>

            <div className="flex items-center mb-7">
              <img
                src="https://img2.sangam.com/assets/home-page-new/language-benefit-d.svg"
                alt="stories"
                width="50"
                height="50"
              />
              <div className="ml-4">
                <div className="text-xl font-bold">
                Enable your search without any barrier
                </div>
                <div className="text-gray-600 mt-2">
                Embark on your journey to find your perfect match now available in multiple languages.
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8 order-1 md:order-2">
        <img
            className="object-cover w-full h-80 rounded"
            src="https://matrimony.home.blog/wp-content/uploads/2020/02/oriya-matrimonial.jpg"
            alt="home"
        />
        </div>

      </div>
    </>
  );
}
