"use client";
import { useLocale } from "next-intl";
import { localeNames, locales } from "../../i18nconfig";
import { usePathname, useRouter } from "@/navigation";

export default function LocaleSwitch() {
    const locale = useLocale();
    const router = useRouter();
    const pathName = usePathname();

    const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(pathName, { locale: e.target.value });
    };

    return (
        <div>
            <select className={"rounded-full p-1"} value={locale} onChange={switchLocale}>
                {locales.map((loc) => (
                    <option key={loc} value={loc}>
                        {localeNames[loc]}
                    </option>
                ))}
            </select>
        </div>
    );
}
