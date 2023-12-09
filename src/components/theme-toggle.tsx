"use client";

import React from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button
            className="font-bold"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}>
            {theme}
        </button>
    );
};

export default ThemeToggle;
