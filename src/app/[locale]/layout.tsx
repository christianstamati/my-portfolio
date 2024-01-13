import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React, { ReactNode } from "react";
import { inter } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
    title: "Christian Stamati",
    description: "Developer",
};

export default function RootLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
    const messages = useMessages();
    return (
        <html lang={params.locale}>
            <body className={`${inter.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NextIntlClientProvider messages={messages}>
                        <div className="flex h-[100svh] flex-col-reverse overflow-hidden xl:flex-row">
                            <NavBar />
                            <div className="h-full w-full overflow-auto">
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
