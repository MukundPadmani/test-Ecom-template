import facebook from "../assets/mediaicons/facebook.svg"
import telegram from "../assets/mediaicons/telegram.svg"
import twitter from "../assets/mediaicons/twitter.svg"
import youtube from "../assets/mediaicons/youtube.svg"

import slider1 from "../assets/sliderImage/slide1.png"
import slider2 from "../assets/sliderImage/slide2.png"
import slider3 from "../assets/sliderImage/slide3.png"

import p1 from "../assets/product/p1.png"
import p2 from "../assets/product/p2.png"
import p3 from "../assets/product/p3.png"
import p4 from "../assets/product/p4.png"

import product1 from "../assets/newproduct/p1/p1.png"
import pc1 from "../assets/newproduct/p1/pc1.jpg"
import pc2 from "../assets/newproduct/p1/pc-2.jpg"
import pc3 from "../assets/newproduct/p1/pc-3.jpg"
import pc4 from "../assets/newproduct/p1/pc-4.jpg"
import pc5 from "../assets/newproduct/p1/pc-5.jpg"

import product2 from "../assets/newproduct/p2/product2.png"
import product3 from "../assets/newproduct/p-3.png"
import product4 from "../assets/newproduct/p-4.png"
import product5 from "../assets/newproduct/p-5.png"
import product6 from "../assets/newproduct/p-6.png"
import product7 from "../assets/newproduct/p-7.png"
import product8 from "../assets/newproduct/p-8.png"
import product9 from "../assets/newproduct/p-9.png"

import SortOrder from "../assets/filtermenuIcons/sortOrderIcon.svg"
import CategoriesIcon from "../assets/filtermenuIcons/Categoriesicon.svg"
import ColorsIcon from "../assets/filtermenuIcons/colorsIcon.svg"
import SizeIcon from "../assets/filtermenuIcons/sizesIcon.svg"

export const navBarList = [
  { id: 1, name: "Men" },
  { id: 2, name: "Woman" },
  { id: 3, name: "Beauty" },
  { id: 4, name: "Sport" },
  { id: 5, name: "Templates" },
  { id: 6, name: "Explore" },
]

export const sidebarmenu = [
  { id: 1, image: facebook },
  { id: 2, image: telegram },
  { id: 3, image: twitter },
  { id: 4, image: youtube },
]

export const sliderManu = [
  { id: 1, image: slider1 },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
]

export const cardMenuBox = [
  {
    id: 1,
    text1: "Explore new arrivals",
    text2: "Shop the latest ",
    text3: " from top brands",
    image: p1,
    bgColor: "bg-yellow-50",
  },
  {
    id: 2,
    text1: "Digital gift cards",
    text2: "Give the gift  ",
    text3: "  of choice",
    image: p2,
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    text1: "Sale collection",
    text2: "Up to  ",
    text3: "  80% off retail",
    image: p3,
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    text1: "Sale collection",
    text2: "Up to  ",
    text3: "  80% off retail",
    image: p4,
    bgColor: "bg-green-50",
  },
]

export const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
]

// export default function useOnClickOutside(ref, handler) {
  //   useEffect(
  //     () => {
  //       const listener = (event) => {
  //         if (!ref.current || ref.current.contains(event.target)) {
  //           return;
  //         }
  //         handler(event);
  //       };
  //       document.addEventListener("mousedown", listener);
  //       document.addEventListener("touchstart", listener);
  //       return () => {
  //         document.removeEventListener("mousedown", listener);
  //         document.removeEventListener("touchstart", listener);
  //       };
  //     },
  //     [ref, handler]
  //   );
  // }
  

export const sliderproducts = [
  {
    id: 1,
    name: "Leather Gloves",
    subname: "Perfect mint green",
    imageSrc: product1,
    imageAlt: "img not found",
    price: "$42.00",
    size: ["XS", "S", "M", "L", "XL"],
    subimagemenu: [pc1, pc2, pc3, pc4, pc5],
    type: "cloth",
  },
  {
    id: 2,
    name: "Manhattan Toy WRT",
    subname: "New design 2023",
    imageSrc: product2,
    imageAlt: "img not found",
    price: "$30.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
  {
    id: 3,
    name: "Ella Leather Tote",
    subname: "Cream pink",
    imageSrc: product3,
    imageAlt: "img not found",
    price: "$145.00",
    size: ["XS", "S", "M", "L", "XL"],
    subimagemenu: [pc1, pc2, pc3, pc4, pc5],
    type: "cloth",
  },
  {
    id: 4,
    name: "Jump Rope Kids",
    subname: "Classic green",
    imageSrc: product4,
    imageAlt: "img not found",
    price: "$68.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
  {
    id: 5,
    name: "Wool Cashmere Jacket",
    subname: "Matte black",
    imageSrc: product5,
    imageAlt: "img not found",
    price: "$12.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
]

export const manCollections = [
  {
    id: 1,
    name: "Leather Gloves",
    subname: "Perfect mint green",
    imageSrc: product1,
    imageAlt: "img not found",
    price: "$42.00",
    size: ["XS", "S", "M", "L", "XL"],
    subimagemenu: [pc1, pc2, pc3, pc4, pc5],
    type: "cloth",
  },
  {
    id: 2,
    name: "Manhattan Toy WRT",
    subname: "New design 2023",
    imageSrc: product2,
    imageAlt: "img not found",
    price: "$30.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
  {
    id: 3,
    name: "Ella Leather Tote",
    subname: "Cream pink",
    imageSrc: product3,
    imageAlt: "img not found",
    price: "$145.00",
    size: ["XS", "S", "M", "L", "XL"],
    subimagemenu: [pc1, pc2, pc3, pc4, pc5],
    type: "cloth",
  },
  {
    id: 4,
    name: "Jump Rope Kids",
    subname: "Classic green",
    imageSrc: product4,
    imageAlt: "img not found",
    price: "$68.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
  {
    id: 5,
    name: "Wool Cashmere Jacket",
    subname: "Matte black",
    imageSrc: product5,
    imageAlt: "img not found",
    price: "$12.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
  {
    id: 6,
    name: "Rey Nylon Backpack",
    subname: "Brown cockroach wings",
    imageSrc: product6,
    imageAlt: "img not found",
    price: "$74.00",
    size: ["XS", "S", "M", "L", "XL"],
    subimagemenu: [pc1, pc2, pc3, pc4, pc5],
    type: "cloth",
  },
  {
    id: 7,
    name: "Round Buckle 1 Belt",
    subname: "Classic green",
    imageSrc: product7,
    imageAlt: "img not found",
    price: "$68.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
    borderColor: [
      "border-violet-400",
      "border-yellow-400",
      "border-orange-400",
      "border-sky-400",
      "border-green-400",
    ],
  },
  {
    id: 8,
    name: "Waffle Knit Beanie",
    subname: "New blue aqua",
    imageSrc: product8,
    imageAlt: "img not found",
    price: "$132.00",
    size: ["S", "M", "L", "XL"],
    subimagemenu: [pc1, pc2, pc3, pc4, pc5],
    type: "cloth",
  },
  {
    id: 9,
    name: "Travel Pet Carrier",
    subname: "Dark pink 2023",
    imageSrc: product9,
    imageAlt: "img not found",
    price: "$28.00",
    type: "other",
    colormenu: [
      "bg-violet-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-sky-400",
      "bg-green-400",
    ],
  },
]

export const dropdwonTitle = [
  { id: 1, name: "Categories" },
  { id: 2, name: "Colors" },
  { id: 3, name: "Sizes" },
  { id: 4, name: "On Sales" },
  { id: 5, name: "Sort Order" },
]

export const dropDownMenuCategoriesCheckboxList = [
  { id: 1, name: "All Categories", inputType: "checkbox" },
  { id: 2,  inputType: "checkbox", name: "New Arrivals" },
  { id: 3,  inputType: "checkbox", name: "Sale" },
  { id: 4,  inputType: "checkbox", name: "Backpacks" },
  { id: 5,  inputType: "checkbox", name: "Travel Bags" },
  { id: 6,  inputType: "checkbox", name: "Laptop Sleeves" },
  { id: 7,  inputType: "checkbox", name: "Organization" },
  { id: 8,  inputType: "checkbox", name: "Accessories" },
]

export const dropDownMenuColorsCheckboxList = [
  { id: 1, name: "White", inputType: "checkbox" },
  { id: 2, name: "Beige", inputType: "checkbox" },
  { id: 3, name: "Blue" , inputType: "checkbox"},
  { id: 4, name: "Black", inputType: "checkbox" },
  { id: 5, name: "Brown", inputType: "checkbox" },
  { id: 6, name: "Green", inputType: "checkbox" },
  { id: 7, name: "Navy", inputType: "checkbox"},
]

export const dropdownSizeCheckboxList = [
  { id: 1, name: "XXS", inputType: "checkbox" },
  { id: 2, name: "XS", inputType: "checkbox" },
  { id: 3, name: "S", inputType: "checkbox" },
  { id: 4, name: "M", inputType: "checkbox" },
  { id: 5, name: "L", inputType: "checkbox" },
  { id: 6, name: "XL", inputType: "checkbox" },
  { id: 7, name: "2XL", inputType: "checkbox" },
]

export const dropdownmenuSortOrderRadioList = [
  { id: 1, nameSort:"inputRadio", name: "Most Popular", inputType: "radio" },
  { id: 2, nameSort:"inputRadio", name: "best Rating", inputType: "radio" },
  { id: 3, nameSort:"inputRadio", name: "Newest", inputType: "radio" },
  { id: 3, nameSort:"inputRadio", name: "Price Low - High", inputType: "radio" },
  { id: 3, nameSort:"inputRadio", name: "Price High - Low", inputType: "radio" },
]

export const sortListDropdown = [
  {
    name: "Sort Order",
    data: dropdownmenuSortOrderRadioList,
    icons: SortOrder,
  },
]

export const filterOptionsData = [
  {
    name: "Categories",
    data: dropDownMenuCategoriesCheckboxList,
    icons: CategoriesIcon,
    inputType: "checkbox"
  },
  { name: "Colors", data: dropDownMenuColorsCheckboxList, icons: ColorsIcon,inputType: "checkbox"},
  { name: "Sizes", data: dropdownSizeCheckboxList, icons: SizeIcon,inputType: "checkbox"},
]



