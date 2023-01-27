import React, { useState } from "react"
import SideBar from "../sidebar"
import { navBarList } from "../../utils"
import logo from "../../assets/logo.svg"
import Input from "../Input"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [searchBar, setSearchBar] = useState(false)

  return (
    <>
      <div className="w-full top-0 z-40 sticky">
        <div className="bg-white border-slate-100 border-b z-10 relative">
          <div className="container mx-auto">
            <div className="h-20 flex justify-between ">
              <button
                onClick={() => setOpen(!open)}
                className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center lg:hidden"
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
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </button>
              {open && <SideBar setOpen={setOpen} open={open} />}
              <div className="lg:flex-1 flex items-center md:flex-row md:items-center sm:flex sm:items-center">
                <div className="inline-block text-slate-600 flex-shrink-0">
                  <img
                    src={logo}
                    alt="logo"
                    className="max-h-8 sm:max-h-10 dark:block"
                  />
                </div>
              </div>
              <div className="hidden lg:flex justify-center mx-4">
                <ul className="nc-Navigation flex items-center">
                  {!searchBar &&
                    navBarList.map((navItem) => (
                      <li
                        key={navItem.id}
                        className="menu-item flex-shrink-0 cursor-pointer"
                      >
                        <span className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200z">
                          {navItem.name}
                        </span>
                      </li>
                    ))}
                  {searchBar && (
                    <div>
                      <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1 py-2 px-4 rounded-xl h-full mt-5">
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
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                        <Input className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm " />
                      </div>
                    </div>
                  )}
                </ul>
              </div>
              <div className="lg:flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100 sm:items-center">
                <div
                  className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center cursor-pointer"
                  onClick={() => setSearchBar(!searchBar)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 max-h-8  sm:max-h-10 dark:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 max-h-8 sm:max-h-10 dark:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 max-h-8  sm:max-h-10 dark:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
