import React from 'react'
import { navBarList, sidebarmenu } from '../../utils';
import Button from '../Button';
import logo from "../../assets/logo.svg";
import Input from '../Input';

const SideBar = ({setOpen, open}) => {
    return (
        <>
            <div className={`fixed inset-0 z-50 overflow-y-auto transition-all duration-1000 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="fixed left-0 top-0 bottom-0 w-full max-w-lg md:w-full sm:w-auto z-max outline-none focus:outline-none">
                    <div className="z-20 relative opacity-100 translate-x-0">
                        <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                            <div className="px-5 py-5">
                                <div className='lg:flex-1 flex items-center md:flex-row md:items-center sm:flex sm:items-center'>
                                    <div className="inline-block text-slate-600 flex-shrink-0">
                                        <img src={logo} alt="logo" className="max-h-8 sm:max-h-10 dark:block"/>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-sm">
                                    <span>Discover the most outstanding articles on all topics of life. Write your stories and share them</span>
                                        <div className="flex justify-between items-center mt-4">
                                            <nav className="flex space-x-4 text-neutral-600 ">
                                                {sidebarmenu.map((io) => (
                                                    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl" key={io.id}>
                                                        <img src={io.image} alt="logo"  />
                                                    </div>
                                                ))}
                                            </nav>
                                            <div>
                                                {/* dark mode space to div */}
                                            </div>
                                        </div>
                                            <div>
                                                <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1 py-2 px-4 rounded-xl h-full mt-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                    </svg>
                                                    <Input className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm " />
                                                </div>
                                            </div>
                                </div>
                                <span className="absolute right-2 top-2 p-1">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none" onClick={() => setOpen(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                            <ul className="flex flex-col py-6 px-2 space-y-1">
                                {navBarList.map((navItem) => (
                                    <li key={navItem.id} className="text-slate-900 dark:text-white">
                                        <p className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><span>{navItem.name}</span></p>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                            <div className="flex items-center justify-between py-6 px-5 space-x-2">
                                <Button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl !px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 " name="Buy this template" />
                            </div>
                        </div>
                    </div>
                    <div className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
                </div>
                {/* <div className="fixed h-full w-full z-50 left-0 top-0 ease-in duration-700">
                    <div className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
                    <div className="fixed h-full w-72 left-0 top-0 bg-white shadow-lg p-4 ">
                        <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
                            <div className="px-5 py-5">
                                <span className="absolute right-2 top-2 p-1">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700  focus:outline-none" onClick={() => setOpen(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default SideBar;