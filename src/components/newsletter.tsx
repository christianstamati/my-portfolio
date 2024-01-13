"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Newsletter = () => {
    const t = useTranslations("Common");
    return (
        <form>
            <Input required className="mb-4" placeholder={t("emailPlaceholder")} />
            <Button className="w-full">{t("subscribe")}</Button>
        </form>
    );
};

export default Newsletter;
