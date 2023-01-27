import React from "react"

const ProductImage = ({image, alt, className}) => {
  return (
    <>
      <img
        src={image}
        alt={alt}
        className={className}
      />
    </>
  )
}

export default ProductImage
