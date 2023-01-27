import React from 'react'

const Input = ({className, style,value}) => {
    return (
        <>
            <input
                style={style}
                className={className}
                value={value}
            />
        </>
    )
}

export default Input;