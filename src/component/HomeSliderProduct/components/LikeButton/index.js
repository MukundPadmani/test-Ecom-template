import React, { useState } from "react"

const LikeButton = () => {
    const [like, setLike] = useState(false);

  return (
    <>
      <div
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 shadow-lg absolute top-3 right-3 z-10 cursor-pointer"
        onClick={() => setLike(!like)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={like === true ? "#ef4444" : "none"}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={like === true ? "#ef4444" : "currentColor"}
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </>
  )
}

export default LikeButton
