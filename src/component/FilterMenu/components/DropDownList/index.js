import React, { useRef, useState } from "react"
import DropdownHeader from "../DropdownHeader"
import Footer from "../Footer"
import Label from "../Label"

const DropDownList = ({ Data }) => {
  const [categories, setCategories] = useState(false)
  const myref = useRef();

    const handleClick = (e) => {
        if (!categories) {
            document.addEventListener("click", handleOutsideClick(e), false);
        } else {
            document.removeEventListener("click", handleOutsideClick(e), false);
        }
        setCategories(!categories)
    };  

    const handleOutsideClick = (e) => {
        // if (myref.current.contains(e.target)) {handleClick()};
        console.log(e.target, "event");
        if (myref.current.contains(e.target)) {
            handleClick();
        }
        console.log(myref.current, "cutrrrrr");
    };
    console.log(myref, "myref");
    // export const ENVIRONMENT = {
    //     baseURL:
    //         process?.env?.FRONTEND_API_ENDPOINT ||'http://stagingapp.signoz.io:3301',
    //         // process?.env?.GITPOD_WORKSPACE_URL?.replace('://', '://8080-') ||
    //         '',
    // };
    

  return (
    <>
      <DropdownHeader
        setCategories={setCategories}
        categories={categories}
        Data={Data.name}
        icons={Data.icons}
        handleClick={handleClick}
        myref={myref}
      />
      {categories && (
        
        <div
          className={`absolute z-40 w-screen max-w-sm px-4  mt-3 sm:px-0 opacity-100 translate-y-0 ${
            Data.name === "Sort Order"
              ? categories === true && "right-0"
              : "left-0"
          }`}
          
        >
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <div className="relative flex flex-col px-5 py-6 space-y-5">
              <div className="flex flex-col text-sm sm:text-base space-y-5">
                {Data.data.map((checkboxData, index) => (
                  <>
                    <Label
                      name={checkboxData.name}
                      key={index}
                      type={checkboxData.inputType}
                      nameSort={checkboxData.nameSort}
                    />
                    {console.log(checkboxData, "checkboxData")}
                    {checkboxData.name === "All Categories" && (
                      <hr className="w-full border-b border-neutral-200" />
                    )}
                  </>
                ))}
              </div>
              {/* footer */}
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DropDownList
