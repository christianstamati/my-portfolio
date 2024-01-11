import { Locale } from "@/lib/types";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "it"];

export const localeNames: Record<Locale, string> = {
    en: "English",
    it: "Italian",
};
