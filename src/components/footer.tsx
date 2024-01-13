"use client";
import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import Newsletter from "@/components/newsletter";
import { appInfo, navItems, socials } from "@/lib/data";
import { usePathname } from "next/navigation";
import LocaleSwitch from "@/components/locale-switch";
import { useLocale, useTranslations } from "next-intl";
import { formatPath } from "@/lib/format-path";

const Footer = () => {
    const pathname = usePathname();
    const t = useTranslations("Footer");
    const locale = useLocale();
    return (
        <div className="flex w-full justify-center bg-gray-50 px-4">
            <div className="w-full max-w-[1000px]">
                <div className="my-20 grid gap-y-8 sm:my-40 sm:grid-cols-2  xl:grid-cols-4">
                    <div className="relative flex flex-col justify-between gap-y-4">
                        <div>
                            <h4 className="mb-2 text-xl font-medium">
                                {appInfo.credits.name} {appInfo.credits.surname}
                            </h4>
                            <p className="text-sm">
                                {t("madeWith")}{" "}
                                <Link
                                    className="underline hover:text-selection"
                                    target="_blank"
                                    href="https://nextjs.org/">
                                    Next.js
                                </Link>{" "}
                                &{" "}
                                <Link
                                    className="underline hover:text-selection"
                                    target="_blank"
                                    href="https://tailwindcss.com/">
                                    Tailwind
                                </Link>
                            </p>
                        </div>
                        <LocaleSwitch />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("pages")}</h4>
                        {navItems.map((x, idx) => (
                            <Link
                                key={idx}
                                className={`text-md w-fit font-medium hover:text-selection ${
                                    formatPath(x.path, locale) === pathname ? "text-selection" : "text-neutral-600"
                                }`}
                                href={formatPath(x.path, locale)}>
                                {x.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("social")}</h4>
                        {socials.map((x, idx) => (
                            <Link
                                target="_blank"
                                key={idx}
                                className="text-md flex w-fit gap-x-3 font-medium text-neutral-600 hover:text-selection"
                                href={x.path}>
                                {React.cloneElement(x.icon as React.ReactElement, { size: 21 })}
                                <p>{t(x.name)}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("newsletter")}</h4>
                        <Newsletter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
