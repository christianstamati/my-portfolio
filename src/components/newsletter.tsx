import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
    return (
        <form>
            <Input required className="mb-4" placeholder={"Your email"} />
            <Button className="w-full">Subscribe</Button>
        </form>
    );
};

export default Newsletter;
