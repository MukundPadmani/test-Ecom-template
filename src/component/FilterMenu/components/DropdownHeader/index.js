import React from "react";
// import onSale from "../../../../assets/filtermenuIcons/onSale.svg";
// import sizesIcon from "../../../../assets/filtermenuIcons/sizesIcon.svg";
// import colorsIcon from "../../../../assets/filtermenuIcons/colorsIcon.svg";
// import sortOrderIcon from "../../../../assets/filtermenuIcons/sortOrderIcon.svg";
// import CategoriesIcon from "../../../../assets/filtermenuIcons/Categoriesicon.svg";
// import CategoriesIcon from "../Icons/Index.js";
import ImageIcon from "../Icons/Index.js";

const DropdownHeader = ({ categories, setCategories, Data, icons, handleClick, myref }) => {
// const filterData = [
    // {"Categories": <CategoriesIcon />},
    // {"Colors": <colorsIcon />},
    // {"Sizes": sizesIcon},
    // {"On Sales": onSale},
    // {"Sort Order": sortOrderIcon}
//   ]
  
    return (

        <>
                <button
                    onClick={(e) => handleClick(e)}
                    ref={myref}
                    className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none text-neutral-500 ${
                    categories === true
                        ? "border-sky-500 bg-sky-100 text-neutral-500"
                        : "border-neutral-300 text-neutral-500 bg-"
                    }`}
                >
                        <ImageIcon image={icons} className="w-5 h-5" />
                        <span className="ml-2 min-w-[90px]">{Data}</span>
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                    </svg>
                </button>
        </>
    )
}

export default DropdownHeader
