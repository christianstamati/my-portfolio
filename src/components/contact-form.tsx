import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return (
        <form className="flex w-full max-w-xl flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Your name</Label>
                    <Input type={"text"} required id="name" placeholder={"John Doe"} />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Your email</Label>
                    <Input type={"email"} required id="email" placeholder={"johndoe@gmail.com"} />
                </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea className="min-h-[150px]" required id="message" placeholder={"Type your message here."} />
            </div>
            <div className="text-right">
                <Button className="w-full px-6 sm:w-fit">Send</Button>
            </div>
        </form>
    );
};

export default ContactForm;
