import React, { useState } from "react"

const ProductCardSmallImage = ({ product }) => {
    const [color, setColor] = useState({});
    return (
        <>
            <div className="flex gap-2">
                {product.subimagemenu.map((subimagemenu, i) => (
                    <div
                        className={`relative w-14 h-6 rounded-full overflow-hidden z-10  cursor-pointer ${
                            color.product === product.id && color.color === i && "border border-black dark:border-slate-300 "
                        }`}
                    >
                        <div
                        className="absolute inset-1 rounded-full overflow-hidden z-0"
                        onClick={() => setColor({ product: product.id, color: i })}
                        >
                        <img
                            src={subimagemenu}
                            alt="not"
                            className="absolute w-full h-full object-cover"
                        />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCardSmallImage
