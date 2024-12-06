import * as React from "react"
const PlayIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
    >
        <circle
            cx={24}
            cy={24}
            r={23.5}
            fill="#242424"
            fillOpacity={0.5}
            stroke="#fff"
        />
        <path
            stroke="#fff"
            d="M31.978 24.324 19.2 15.6v16.8l12.778-8.076Z"
            clipRule="evenodd"
        />
    </svg>
)
export default PlayIcon
