import React from 'react';

function AboutHeader() {
    return (
        <div>
            <section class='flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 '>
                <div class='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
                    <div class='px-4 mb-10 md:text-center md:mb-20'>
                        <p class='mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400'>
                            About Us
                        </p>
                        <h2 class='pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300'>
                            What we do
                        </h2>
                        <div class='flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14'>
                            <div class='flex-1 h-2 bg-blue-200'>
                            </div>
                            <div class='flex-1 h-2 bg-blue-400'>
                            </div>
                            <div class='flex-1 h-2 bg-blue-300'>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-wrap '>
                        <div class='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
                            <img src='https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg' alt=''
                                class='relative z-40 object-cover w-full h-96'/>
                        </div>
                        <div class='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 '>
                            <h2
                                class='py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300'>
                                We are providing a better travel experience
                            </h2>
                            <p class='mb-4 text-base leading-7 text-gray-500 dark:text-gray-400'>
                                Embark on unforgettable journeys with our premium travel services. Immerse yourself in the charm of diverse destinations, carefully curated for a personalized experience. Our expert guides ensure every moment is filled with exploration and discovery. 
                            </p>
                            <ul class='mb-10'>
                                <li class='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
                                    <span class='mr-3 text-blue-500 dark:text-blue-400 '>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                            class='w-5 h-5 bi bi-patch-check-fill' viewBox='0 0 16 16'>
                                            <path
                                                d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                                        </svg>
                                    </span>
                                    Craft your dream adventure with personalized travel experiences.
                                </li>
                                <li class='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
                                    <span class='mr-3 text-blue-500 dark:text-blue-400'>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                            class='w-5 h-5 bi bi-patch-check-fill' viewBox='0 0 16 16'>
                                            <path
                                                d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                                        </svg>
                                    </span>
                                    Explore with seasoned experts for an unparalleled journey.
                                </li>
                                <li class='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
                                    <span class='mr-3 text-blue-500 dark:text-blue-400 '>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                            class='w-5 h-5 bi bi-patch-check-fill' viewBox='0 0 16 16'>
                                            <path
                                                d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                                        </svg>
                                    </span>
                                    Elevate travel with seamless arrangements and unmatched comfort
                                </li>
                            </ul>
                            <a href='#'
                                class='px-4 py-3 text-blue-700 transition-all transform border border-blue-500 hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100'>
                                Discover more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutHeader;
