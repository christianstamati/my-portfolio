import React from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { projects } from "@/lib/data";
import Card from "@/components/card";
import Separator from "@/components/separator";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomePage() {
    const t = useTranslations();
    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-16">
                <div className="flex text-neutral-400">
                    <MapPin className="mr-2" />
                    <p className="font-medium uppercase tracking-widest">{t("Common.location")}</p>
                </div>
                <h1 className="text-3xl font-medium md:text-5xl md:leading-tight">{t("Messages.homeHeader")}</h1>
            </div>
            <Separator />
            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-16">
                <div className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
                    {projects.map((p, index) => (
                        <Card key={index} title={p.name} category={p.category} image={p.cover} badge={p.badge} />
                    ))}
                    <div className="rounded-xl bg-[#F5F5F5] p-8 shadow-sm">
                        <h3 className="text-4xl font-semibold">See all portfolio projects</h3>
                        <Link href="/projects" className="mt-4 flex font-medium text-[#2277F6]">
                            <p>See all projects</p>
                            <ChevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
