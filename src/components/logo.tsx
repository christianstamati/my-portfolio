import React from "react";

const Logo = ({ size, color = "white" }: { size?: string; color?: "white" | "black" | string }) => {
    return (
        <svg
            width={size ? size : "24"}
            height={size ? size : "24"}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L12 6L24 0V6L18 9L24 12V18L12 24V18L18 15L12 12L0 6V0Z" />
            <path d="M12 12L0 18V24L12 18V12Z" />
        </svg>
    );
};

export default Logo;
