"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ContactForm = () => {
    const t = useTranslations("Contact");
    return (
        <form className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">{t("nameLabel")}</Label>
                    <Input type={"text"} required id="name" placeholder={"John Doe"} />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">{t("emailLabel")}</Label>
                    <Input type={"email"} required id="email" placeholder={"johndoe@gmail.com"} />
                </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="message">{t("messageLabel")}</Label>
                <Textarea
                    className="min-h-[200px] sm:min-h-[250px]"
                    required
                    id="message"
                    placeholder={t("messagePlaceholder")}
                />
            </div>
            <div className="text-right">
                <Button className="w-full p-7 text-xl font-normal sm:w-fit">{t("sendButton")}</Button>
            </div>
        </form>
    );
};

export default ContactForm;
