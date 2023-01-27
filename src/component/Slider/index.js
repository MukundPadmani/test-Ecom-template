import React, {  useState } from "react";
import imageRightPng from "../../assets/sliderImage/slide1.png";
import imageRightPng2 from "../../assets/sliderImage/slide2.png";
import imageRightPng3 from "../../assets/sliderImage/slide3.png";

// import backgroundLineSvg from "images/Moon.svg";
// import ButtonPrimary from "shared/Button/ButtonPrimary";
// import Next from "shared/NextPrev/Next";
// import Prev from "shared/NextPrev/Prev";
import useInterval from "react-use/lib/useInterval";
import backgroundLineSvg from "../../assets/background.svg";

const DATA = [
  {
    image: imageRightPng2,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
];
let TIME_OUT = null;

const Slider = () => {
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, setToggleIsRunning] = useState(true);

  useInterval(() => { handleAutoNext()},
    isRunning ? 5500 : null
  );

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    setToggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      setToggleIsRunning(true);
    }, 1000);
  };

  const renderItem = (index) => {
    const isActive = indexActive === index;
    const item = DATA[index];
    if (!isActive) {
      return null;
    }
    return (
      <div className="flex flex-col-reverse lg:flex-col relative overflow-hidden ">
        <div className="inset-0 bg-[#E3FFE6]">
          <div
            className={`container mx-auto flex flex-col-reverse lg:flex-col relative overflow-hidden`}
            key={index}
          >
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
              {DATA.map((_, index) => {
                const isActive = indexActive === index;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setIndexActive(index);
                      handleAfterClick();
                    }}
                    className={`relative px-1 py-1.5 cursor-pointer`}
                  >
                    <div
                      className={`relative w-20 h-1 shadow-sm rounded-md bg-white`}
                    >
                      {isActive && (
                        <div
                          className={`duration-150 ease-linear absolute inset-0 bg-slate-900 rounded-md ${
                            isActive ? " " : " "
                          }`}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Prev */}
              <div
                className={`dark:text-slate-400 absolute left-1 sm:left-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700`}
                data-glide-el="controls"
              >
                <button
                  className={`w-12 h-12  rounded-full flex items-center justify-center border-2 hover:border-slate-200 dark:hover:border-slate-600 border-transparent `}
                  onClick={() => handleClickPrev()}
                  title="Prev"
                  data-glide-dir="<"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 12H3.67004"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

            {/* Next */}
              <div
              className={` dark:text-slate-400 absolute right-1 sm:right-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700`}
              data-glide-el="controls"
            >
              <button
                className={`w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400 rounded-full flex items-center justify-center border-2 border-transparent`}
                onClick={() => handleClickNext()}
                title="Next"
                data-glide-dir=">"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              </div>

            {/* BG */}
            <div className=" inset-0 bg-[#E3FFE6]">
              {/* <div className="absolute inset-0 bg-[#F7F0EA]"> */}
              <img
                className="absolute w-full h-full object-contain"
                src={backgroundLineSvg}
                alt="hero"
              />
            </div>

            <div className="relative container pb-0 pt-14 sm:pt-20 lg:py-44">
              <div
                className={`relative z-[1] w-full max-w-3xl space-y-8 sm:space-y-14 duration-600 ease-in-out`}
              >
                <div className="space-y-5 sm:space-y-6">
                  <span className="ease-in-out duration-400 block text-base md:text-xl text-slate-700 font-medium">
                    {item.subHeading}
                  </span>
                  <h2 className="duration-600 ease-in-out font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
                    {item.heading}
                  </h2>
                </div>

                <button
                  className="duration-800 ease-in-out  hover:text-white relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-6 sm:py-5 sm:px-9 disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-white dark:text-white-800 shadow-xl nc-SectionHero2Item__button dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
                  sizeClass="py-3 px-6 sm:py-5 sm:px-9"
                  href={item.btnLink}
                >
                  <span>{item.btnText}</span>
                  <span>
                    <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 22L20 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="mt-10 lg:mt-0 lg:absolute right-0 bottom-0 top-0 w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                <img
                  className="w-full h-full object-contain object-right-bottom duration-650 ease-in-out"
                  src={item.image}
                  alt={item.heading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default Slider;