import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { FaAngellist, FaFontAwesomeFlag, FaSlideshare, FaClock } from 'react-icons/fa';
import Link from 'next/link';





const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex flex-col justify-between">



      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        <div className="text-center md:text-left">
          <p
            className="text-xl md:text-2xl lg:text-3xl"
            style={{ color: "#E71F0C" }}
          >
            Explore The
          </p>
          <h1 className="py-3 text-4xl md:text-6xl lg:text-7xl font-bold">
            Travel & Adventures
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl ">
            Empowering Your Digital Future.
          </p>
          <button
            style={{ color: "#E71F0C" }}
            className="py-3 px-6 md:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600
            hover:bg-transparent hover:text-indigo-600 rounded-md"
          >
            Explore Now
          </button>
        </div>



        <div className="md:pl-4 md:pr-2">
          <img
            className="w-full"
            src="https://www.pngall.com/wp-content/uploads/2/Travel-PNG-Image-HD.png"
            alt="/"
          />
        </div>


      </div>





      <div
        className="container mx-auto md:relative flex flex-wrap flex-col py-10 md:min-w-[760px] bottom-5
        md:mx-4 md:left-1/2 md:transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl"
      >
        <div className="flex flex-wrap gap-7 ">
          <div>
            <p>Destination</p>
            <div className="relative w-52 mx-auto">
              {/* Logo */}
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <FaAngellist

                  className="h-5 w-5 text-black-400 "
                  style={{ color: "#3112DD" }}
                />
              </div>

              {/* Input field */}
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 "
                style={{ color: "black" }}
                placeholder="Where to go"
              />
            </div>
          </div>

          <div>
            <p>Type</p>
            <div className="relative w-52 mx-auto">
              {/* Logo */}
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <FaFontAwesomeFlag
                  className="h-5 w-5 text-black-400 "
                  style={{ color: "#3112DD" }}
                />
              </div>

              {/* Input field */}
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                style={{ color: "black" }}
                placeholder="Activity"
              />
            </div>
          </div>

          <div>
            <p>Where</p>
            <div className="relative w-52 mx-auto">
              {/* Logo */}
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <FaClock
                  className="h-5 w-5 text-black-400 "
                  style={{ color: "#3112DD" }}
                />
              </div>

              {/* Input field */}
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                style={{ color: "black" }}
                placeholder="Date"
              />
            </div>
          </div>

          <div>
            <p>Guest</p>
            <div className="relative w-52 mx-auto">
              {/* Logo */}
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <FaSlideshare
                  className="h-5 w-5 text-black-400 "
                  style={{ color: "#3112DD" }}
                />
              </div>

              {/* Input field */}
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                style={{ color: "black" }}
                placeholder="0"
              />
            </div>
          </div>

          <div>


            <Link href="/search">

              <div className="relative grid place-content-center w-32 mx-auto">
                {/* Logo */}
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-black-400 "
                    style={{ color: "#3112DD" }}
                  />
                </div>

                {/* Input field */}
                <button
                  className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"

                >
                  Search
                </button>
              </div>


            </Link>







          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
