import React from "react"

const Label = ({ name, type, nameSort }) => {
    console.log(type, "type");
    return (
        <>
            <label className="pl-2.5 sm:pl-3.5 flex flex-1 select-none gap-5">
                <input
                    type={type}
                    name={nameSort}
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                />
                <span className="text-slate-900 ">{name}</span>
            </label>
        </>
    )
}

export default Label
