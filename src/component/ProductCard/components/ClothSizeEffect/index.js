import React from "react"

const ClothSizeEffect = ({ clothSize }) => {
    return (
        <>
            <div className="absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
                {clothSize.size.map((sizes) => (
                    <div className="shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
                        {sizes}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ClothSizeEffect
