import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { cabinetGrotesk } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";

export const metadata: Metadata = {
    title: "Christian Stamati",
    description: "Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${cabinetGrotesk.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
