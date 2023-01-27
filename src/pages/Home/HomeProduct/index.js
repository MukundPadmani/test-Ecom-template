import React from "react"
import HomeSliderProduct from "../../../component/HomeSliderProduct"
import { sliderproducts } from "../../../utils"

const HomeProduct = ({ products }) => {
  return (
    <>
      <div
        //   className="container space-y-24 my-24 lg:space-y-32 lg:my-32"
        className="mt-24 lg:mt-32"
        style={{ paddingLeft: "calc(50vw - 600px)" }}
      >
        <div>
          <div className="flow-root">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-black">
                  New Arrivals.
                  <span className="text-neutral-500 dark:text-neutral-400">
                    REY backpacks & bags
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <HomeSliderProduct products={sliderproducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeProduct
