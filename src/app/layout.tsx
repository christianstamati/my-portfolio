import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React, { ReactNode } from "react";
import { generalSans, inter } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Christian Stamati",
    description: "Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="flex h-[100svh] flex-col-reverse overflow-hidden xl:flex-row">
                        <NavBar />
                        <div className="h-full w-full overflow-auto">
                            {children}
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
