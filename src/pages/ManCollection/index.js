import React from "react"
import FilterMenu from "../../component/FilterMenu"
// import DropDownMenu from "../../component/DropdownMenu"
import ProductCard from "../../component/ProductCard"
import Layout from "../../layout"
import { manCollections } from "../../utils"

const ManCollection = () => {
    return (
        <>
            <Layout>
                <div className="flex min-h-screen flex-col">
                    <div className="bg-white border-b top-0 border-slate-100 z-10">
                        <div className="container mx-auto py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
                            <div className="space-y-10 lg:space-y-14">
                            {/* HEADING */}
                                <div className="max-w-screen-sm">
                                    <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                    Man collection
                                    </h2>
                                    <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                                    We not only help you design exceptional products, but also
                                    make it easy for you to share your designs with more
                                    like-minded people.
                                    </span>
                                </div>

                                <hr className="border-slate-200 dark:border-slate-700" />
                                {/* <div>
                                    <div className="container space-y-24 my-24 lg:space-y-32 lg:my-32">
                                    <div>
                                        <div className="flow-root">
                                            <div>
                                                <div className="bg-white">
                                                    <div className="mx-auto  max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                                                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                                            <DropDownMenu />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div> */}
                                <main>
                                    <FilterMenu />
                                    <div>
                                        <ProductCard products={manCollections} />
                                    </div>
                                </main>
                            </div>

                            <hr className="border-slate-200 dark:border-slate-700" />

                            <div className={` relative flex flex-col lg:flex-row items-center`}>
                                <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
                                    <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
                                    Earn free money <br /> with Ciseco
                                    </h2>
                                    <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
                                    With Ciseco you will get freeship & savings combo...
                                    </span>
                                    <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ManCollection
