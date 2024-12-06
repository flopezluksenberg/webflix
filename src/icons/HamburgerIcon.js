import * as React from "react"
const HamburgerIcon = ({width=27, height=14, ...props}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <path stroke="#fff" d="M0 1h27M0 7h27M0 13h17" />
    </svg>
)
export default HamburgerIcon
