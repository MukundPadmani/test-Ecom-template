import React from 'react'

const Button = ({name, style, className, value, onClick, img}) => {
    return (
        <>
            <button 
                style={style}
                className={className}
                value={value}
                onClick={onClick}
            >
                {name} 
                <img src={img} alt="" /> 
            </button>
        </>
    )
}

export default Button;