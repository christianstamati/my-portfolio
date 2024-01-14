import React from "react";
import { useTranslations } from "next-intl";
import Separator from "@/components/separator";
import ContactForm from "@/components/contact-form";
export default function ContactPage() {
    const t = useTranslations("Contact");
    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-8 sm:py-16">
                <h1 className="text-3xl font-medium md:text-6xl md:leading-tight">{t("header")}</h1>
            </div>

            <Separator />
            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-8 sm:py-16">
                <ContactForm />
            </div>
        </div>
    );
}
