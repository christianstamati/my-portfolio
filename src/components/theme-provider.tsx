"use client";
import React from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const mounted = useMounted();
    if (!mounted) {
        return null;
    }
    return (
        <NextThemeProvider {...props} defaultTheme={"light"}>
            {children}
        </NextThemeProvider>
    );
}
