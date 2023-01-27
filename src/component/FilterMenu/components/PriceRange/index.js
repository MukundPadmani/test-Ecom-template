import React, { useState } from "react"
import Footer from "../Footer"

const PriceRange = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border  focus:outline-none ${
            open === true
              ? "border-sky-500 bg-sky-100 text-neutral-500"
              : "border-neutral-300 text-neutral-500 bg-"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2 min-w-[90px]">100$ - 500$</span>
        </button>
        {open && (
          <div className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 opacity-100 translate-y-0">
            <div className=" overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <div className="relative flex flex-col px-5 py-6 space-y-8">
                <div className="space-y-5">
                  <span className="font-medium">Price range</span>
                  <div class=" flex justify-center items-center">
                    <div class="relative max-w-xl w-full">
                      <div>
                        <input
                          type="range"
                          step="100"
                          className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                        />

                        <input
                          type="range"
                          step="100"
                          class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
                        />

                        <div class="relative z-10 h-2">
                          <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-[#abe2fb]"></div>
                          <div class="absolute z-20 top-0 bottom-0 rounded-md bg-[#abe2fb]"></div>
                          <div class="absolute z-30 w-6 h-6 top-0 left-0 bg-[#abe2fb] rounded-full -mt-2"></div>
                          <div class="absolute z-30 w-6 h-6 top-0 right-0 bg-[#abe2fb] rounded-full -mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between space-x-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      <span>Min price</span>
                    </label>
                    <div className="mt-1 relative border rounded-full p-[6px]">
                      <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        name="minPrice"
                        disabled
                        id="minPrice"
                        className="block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent"
                        value="1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      <span>Max price</span>
                    </label>
                    <div className="mt-1 relative border rounded-full p-[6px]">
                      <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        name="minPrice"
                        disabled
                        id="minPrice"
                        className="block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent"
                        value="500"
                      />
                    </div>
                  </div>
                </div>
                {/* footer */}
                <Footer />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PriceRange
