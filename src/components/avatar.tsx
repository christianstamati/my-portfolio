import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Avatar = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 text-center">
            <div className={"relative h-32 w-32 overflow-hidden rounded-full"}>
                <Image className="object-cover" src={"/static/images/portrait.png"} alt={"portrait"} fill />
            </div>
            <p>Hi, I&apos;m Chris 👋</p>
            <h2 className="font max-w-sm text-4xl font-medium">
                Building digital experiences with unity, unreal and react.
            </h2>
            <Button>Read More</Button>
        </div>
    );
};

export default Avatar;
