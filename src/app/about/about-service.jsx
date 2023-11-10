import { useTheme } from "next-themes";

function Service() {
    const { theme } = useTheme();
  return (
    <div>
        
        
        <section className={`flex items-center bg-white lg:h-screen font-poppins dark:bg-gray-700 ${theme === "dark" ? "dark:bg-dark" : "bg-white"} `}>
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-5xl dark:text-gray-300">Why Choose us
            </h2>
            <p class="text-lg font-medium text-gray-500 mb-7 md:text-xl dark:text-gray-400">
                Start your plain today</p>
            <div class="flex flex-wrap justify-center -mx-3">
                <div class="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                    <div
                        class="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-yellow-100 via-blue-200 to-yellow-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
                        <h2
                            class="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 dark:border-gray-400 lg:text-2xl dark:text-gray-400">
                            Basic
                        </h2>
                        <div class="mb-4">
                            <span
                                class="relative text-3xl font-bold text-blue-700 dark:text-gray-300 -top-20 right-1">$</span>
                            <span class="font-bold text-blue-700 text-9xl dark:text-gray-300">10</span>
                        </div>
                        <p class="mb-4 text-lg font-medium text-gray-700 md:text-xl dark:text-gray-400">
                            Lorem ipsum dor amet
                        </p>
                        <ul class="mb-4 lg:self-center">
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>RGB Memory used </span>
                            </li>
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>3 Emails</span>
                            </li>
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-gray-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>Manage disc space</span>
                            </li>
                            <li class="flex items-center font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>Unlimited Domains</span>
                            </li>
                        </ul>
                        <div class="mt-4 ">
                            <a href="#"
                                class="absolute bottom-0 right-0 w-full px-3 py-4 text-sm text-center text-gray-100 bg-blue-700 lg:w-32 lg:rounded-tl-3xl lg:rounded-br-3xl dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-blue-900 hover:text-gray-100">
                                Get More</a>
                        </div>
                    </div>
                </div>
                <div class="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                    <div
                        class="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-pink-100 via-gray-300 to-pink-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
                        <h2
                            class="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 lg:text-2xl dark:border-gray-400 dark:text-gray-400">
                            Premium
                        </h2>
                        <div class="mb-4">
                            <span
                                class="relative text-3xl font-bold text-blue-700 dark:text-gray-300 -top-20 right-1">$</span>
                            <span class="font-bold text-blue-700 text-9xl dark:text-gray-300">20</span>
                        </div>
                        <p class="mb-4 text-lg font-medium text-gray-700 md:text-xl dark:text-gray-400">
                            Lorem ipsum dor amet
                        </p>
                        <ul class="mb-4 lg:self-center">
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>RGB Memory used </span>
                            </li>
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>3 Emails</span>
                            </li>
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-gray-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>Manage disc space</span>
                            </li>
                            <li class="flex items-center font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>Unlimited Domains</span>
                            </li>
                        </ul>
                        <div class="mt-4 ">
                            <a href="#"
                                class="absolute bottom-0 right-0 w-full px-3 py-4 text-sm text-center text-gray-100 bg-blue-700 lg:w-32 lg:rounded-tl-3xl lg:rounded-br-3xl dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-blue-900 hover:text-gray-100">
                                Get More</a>
                        </div>
                    </div>
                </div>
                <div class="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                    <div
                        class="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-green-100 via-blue-100 to-green-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
                        <h2
                            class="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 lg:text-2xl dark:text-gray-400 dark:border-gray-400">
                            Ultimate
                        </h2>
                        <div class="mb-4">
                            <span
                                class="relative text-3xl font-bold text-blue-700 dark:text-gray-300 -top-20 right-1">$</span>
                            <span class="font-bold text-blue-700 text-9xl dark:text-gray-300">30</span>
                        </div>
                        <p class="mb-4 text-lg font-medium text-gray-700 md:text-xl dark:text-gray-400">
                            Lorem ipsum dor amet
                        </p>
                        <ul class="mb-4 lg:self-center">
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>RGB Memory used </span>
                            </li>
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>3 Emails</span>
                            </li>
                            <li class="flex items-center mb-3 font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-gray-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>Manage disc space</span>
                            </li>
                            <li class="flex items-center font-medium text-gray-700 dark:text-gray-400">
                                <a href="#" class="mr-2 text-green-700 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </a>
                                <span>Unlimited Domains</span>
                            </li>
                        </ul>
                        <div class="mt-4 ">
                            <a href="#"
                                class="absolute bottom-0 right-0 w-full px-3 py-4 text-sm text-center text-gray-100 bg-blue-700 lg:w-32 lg:rounded-tl-3xl lg:rounded-br-3xl dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-blue-900 hover:text-gray-100">
                                Get More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        
        </div>
  )
}

export default  Service;