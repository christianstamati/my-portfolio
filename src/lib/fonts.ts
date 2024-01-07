import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const generalSans = localFont({
    src: "../../public/static/fonts/general-sans/GeneralSans-Variable.woff2",
    display: "swap",
});

export const cabinetGrotesk = localFont({
    src: "../../public/static/fonts/cabinet-grotesk/CabinetGrotesk-Variable.woff2",
    display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });
