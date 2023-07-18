import React from 'react'

const DonutPage = () => {
  return (
    <section className="min-h-[calc(100vh-73px)] max-w-screen-xl mx-auto p-4">
         <div>
        <h1 className="font-extrabold text-accent text-[32px]">SingleDonut</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[350px]">Learn More About These Tasty Treats Leave Comment</p>
        </div>
  
        <div class="text-gray-400 font-medium text-sm mb-7 mt-6">
            <img class="rounded w-full" src="https://picsum.photos/536/354" />
        </div>
        <div class="text-gray-500 text-sm mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
        <div class="flex justify-start mb-4 border-t border-gray-100">
        <div class="flex w-full mt-1 pt-2           ">
        <p>Likes</p>
        </div>
        </div>
        <div>
        <h1 className="font-extrabold text-accent text-[32px] mb-6">Comments</h1>
        </div>
        <div class="relative flex items-center self-center w-full max-w-full overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <img class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                    <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                        <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                        <svg class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        </button>
                    </span>
                     <input type="search" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style={{borderRadius: '25px'}} placeholder="Post a comment..." autocomplete="off" />
                </div>
                <div class="text-black p-4 antialiased flex">
                <img class="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" />
                <div>
                    <div class="bg-gray-100 rounded-lg px-4 pt-4 pb-3.5">
                        <div class="font-semibold text-sm leading-relaxed">Sara Lauren</div>
                        <div class="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div class="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
                        <span class="text-sm ml-1 pr-1.5 text-gray-500">3</span>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default DonutPage