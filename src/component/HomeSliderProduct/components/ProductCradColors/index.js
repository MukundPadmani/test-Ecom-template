import React, { useState } from "react"

const ProductCradColors = ({ product }) => {
  const [color, setColor] = useState({})
    return (
        <>
            <div className="flex space-x-1">
                {product.colormenu.map((colors, i) => (
                    <div
                        className={`relative w-6 h-6 rounded-full overflow-hidden border cursor-pointer ${
                        color.product === product.id &&
                        color.color === i &&
                        "border cursor-pointer border-violet-500 "
                        }`}
                    >
                        <div
                        onClick={() => setColor({ product: product.id, color: i })}
                        className="z-10 cursor-pointer "
                        >
                            <div
                                className={`absolute inset-0.5 rounded-full z-0 ${colors}`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCradColors
