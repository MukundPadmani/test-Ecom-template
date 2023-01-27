import React from "react"

const ImageIcon = ({ image, className, style }) => {
  return (
    <div>
        <img src={image} alt="NOT" className={className} style={style} />
    </div>
  )
}

export default ImageIcon
