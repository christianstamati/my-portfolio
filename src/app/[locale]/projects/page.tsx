import React from "react";
import { useTranslations } from "next-intl";
import Separator from "@/components/separator";
import { projectFilters, projects } from "@/lib/data";
import Card from "@/components/card";
export default function WorkPage() {
    const t = useTranslations("Projects");
    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-8 sm:py-16">
                <h1 className="text-3xl font-medium md:text-6xl md:leading-tight">{t("header")}</h1>
            </div>
            <Separator />
            <div className="flex w-full max-w-[1000px] flex-row items-center gap-4 overflow-auto px-4 py-8">
                <p className="whitespace-nowrap text-xs font-medium uppercase tracking-widest">{t("filterBy")}</p>

                <div className="flex gap-4">
                    {projectFilters.map((p, index) => (
                        <p key={index} className="w-fit rounded-full border-2 border-gray-200 px-4 py-1 text-xl">
                            {p.displayName}
                        </p>
                    ))}
                </div>
            </div>
            <Separator />

            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-16">
                <div className={"grid grid-cols-1 gap-6 md:grid-cols-2"}>
                    {projects.map((p, index) => (
                        <Card key={index} title={p.name} category={p.category} image={p.cover} badge={p.badge} />
                    ))}
                </div>
            </div>
        </div>
    );
}
