import { useTheme } from "next-themes";

export default function FeaturedTour() {

    const { theme } = useTheme();

  return (
    <div className={`{${theme === "dark" ? "dark:bg-dark" : "bg-white"}}`}>





            
        <section class={`items-center bg-gray-100 lg:flex lg:h-screen font-poppins dark:bg-gray-900  `}>
        
            
        <div class={`justify-center max-w-6xl  py-4 mx-auto lg:py-0 `}>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2">
                <div class="p-4 bg-white rounded dark:bg-gray-800">
                    <div class="relative w-full h-40 mb-2">
                        <img src="https://i.postimg.cc/RF9h9qzx/pexels-jaime-reimer-2695232.jpg" alt=""
                            class="object-cover w-full h-full rounded"/>
                        <span class="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-black bg-blue-700">
                            10 trips</span>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-lg font-semibold dark:text-black">Manaslu Trekking</h2>
                        </div>
                        <div class="text-base font-semibold text-black">$2234</div>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xs font-medium dark:text-black">Travel Date</h2>
                        <span
                            class="inline-block px-2 py-1 text-xs text-black rounded-full dark:bg-gray-700 dark:text-black bg-blue-50">
                            1st march 2022
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xs font-medium dark:text-black">Day</h2>
                        <span class="inline-block px-2 py-1 text-xs text-black dark:text-black">6 night 7 days
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xs font-medium dark:text-black">Arrived Date</h2>
                        <span
                            class="inline-block px-2 py-1 text-xs text-black rounded-full bg-blue-50 dark:text-black dark:text-black">
                            7th march 2022</span>
                    </div>
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center">
                            <img src="https://i.postimg.cc/RF9h9qzx/pexels-jaime-reimer-2695232.jpg" alt=""
                                class="object-cover object-right rounded-full w-7 h-7"/>
                            <img src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg" alt=""
                                class="object-cover object-right -ml-2 rounded-full w-7 h-7"/>
                            <img src="https://i.postimg.cc/s2tvtrPF/first.jpg" alt=""
                                class="object-cover object-right -ml-2 rounded-full w-7 h-7"/>
                            <a href="" class="text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg></a>
                        </div>
                        <a href="#" class="px-3 py-2 text-xs text-black text-black rounded hover:text-black">
                            See Details</a>
                    </div>
                </div>
                <div class="p-4 bg-white rounded dark:bg-gray-800">
                    <div class="relative w-full h-40 mb-2">
                        <img src="https://i.postimg.cc/YqyH80nq/pexels-eric-sanman-1365425.jpg" alt=""
                            class="object-cover w-full h-full rounded"/>
                        <span class="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-black bg-blue-700">
                            10 trips</span>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-lg font-semibold dark:text-black">Ghorepani Trekking</h2>
                        </div>
                        <div class="font-semibold text-black -base">$2234</div>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xs font-medium dark:text-black">Travel Date</h2>
                        <span
                            class="inline-block px-2 py-1 text-xs text-blue-500 rounded-full dark:text-black dark:text-black bg-blue-50">
                            1st march 2022
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xs font-medium dark:text-black">Day</h2>
                        <span class="inline-block px-2 py-1 text-xs text-black dark:text-black">6 night 7 days
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xs font-medium dark:text-black">Arrived Date</h2>
                        <span
                            class="inline-block px-2 py-1 text-xs text-black rounded-full bg-blue-50 dark:text-black dark:text-black">
                            7th march 2022</span>
                    </div>
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center">
                            <img src="https://i.postimg.cc/s2tvtrPF/first.jpg" alt=""
                                class="object-cover object-right rounded-full w-7 h-7"/>
                            <img src="https://i.postimg.cc/RF9h9qzx/pexels-jaime-reimer-2695232.jpg" alt=""
                                class="object-cover object-right -ml-2 rounded-full w-7 h-7"/>
                            <img src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg" alt=""
                                class="object-cover object-right -ml-2 rounded-full w-7 h-7"/>
                            <a href="" class="text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg></a>
                        </div>
                        <a href="#" class="px-3 py-2 text-xs text-black text-black rounded hover:text-black">
                            See Details</a>
                    </div>
                </div>
                <div class="p-4 bg-white rounded dark:bg-gray-800">
                    <div class="relative w-full h-40 mb-2">
                        <img src="https://i.postimg.cc/nr41rXXK/pexels-dreamlens-production-2450296-1.jpg" alt=""
                            class="object-cover w-full h-full rounded"/>
                        <span class="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-black bg-blue-700">
                            10 trips</span>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-lg font-semibold dark:text-black">khulekhani Trekking</h2>
                        </div>
                        <div class="font-semibold text-black -base">$2234</div>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xs font-medium dark:text-black">Travel Date</h2>
                        <span
                            class="inline-block px-2 py-1 text-xs text-black rounded-full dark:bg-gray-700 dark:text-black bg-blue-50">
                            1st march 2022
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xs font-medium dark:text-black">Day</h2>
                        <span class="inline-block px-2 py-1 text-xs text-black dark:text-text-black">6 night 7 days
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xs font-medium dark:text-black">Arrived Date</h2>
                        <span
                            class="inline-block px-2 py-1 text-xs text-black rounded-full bg-blue-50 dark:text-black dark:text-black">
                            7th march 2022</span>
                    </div>
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center">
                            <img src="https://i.postimg.cc/s2tvtrPF/first.jpg" alt=""
                                class="object-cover object-right rounded-full w-7 h-7"/>
                            <img src="https://i.postimg.cc/wT039J5Q/third.jpg" alt=""
                                class="object-cover object-right -ml-2 rounded-full w-7 h-7"/>
                            <img src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg" alt=""
                                class="object-cover object-right -ml-2 rounded-full w-7 h-7"/>
                            <a href="" class="text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                    </path>
                                </svg></a>
                        </div>
                        <a href="#" class="px-3 py-2 text-xs text-black bg-blue-800 rounded hover:text-black">
                            See Details</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        </div>
  )
}

 