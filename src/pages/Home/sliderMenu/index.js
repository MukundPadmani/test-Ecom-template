import React from 'react'
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import Button from '../../../component/Button';
import { breakPoints, cardMenuBox } from '../../../utils';


const SliderMenu = () => {
    return (
        <>
            <div className="mt-24 lg:mt-32" style={{ paddingLeft: "calc(40vw - 500px)" }}>
                <div className=" relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 container " >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-black">Discover more.<span className="text-neutral-500 dark:text-neutral-400">Good things are waiting for you</span></h2>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    {cardMenuBox.map((i) => (
                        <div className={`flex cursor-pointer justify-evenly items-center h-[300px] w-full rounded-lg text-white font-medium ${i.bgColor}`} style={{ margin: "0 15px"}}>
                            <div>
                                <div className="inset-5 sm:inset-8 flex flex-col">
                                    <div className="max-w-xs">
                                        <span className="block mb-2 text-sm text-slate-700">{i.text1}</span>
                                        <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">{i.text2} <br /> {i.text3}</h2>
                                    </div>
                                    <div className="mt-[40px]">
                                        <Link to="/man-collection">
                                            <Button className="h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" name="Show me all" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div href="/" className=" items-center md:max-w-x inset-5 sm:inset-8" >
                                <img className="right-1 max-w-[200px] h-full object-contain drop-shadow-xl" src={i.image} alt="" />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default SliderMenu;