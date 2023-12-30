import React from "react";
import Image from "next/image";

const Avatar = () => {
    return (
        <div>
            <div className={"relative h-32 w-32 overflow-hidden rounded-full"}>
                <Image className="object-cover" src={"/static/images/portrait.png"} alt={"portrait"} fill />
            </div>
            <p>Hi, I&apos;m Chris 👋</p>
            <h2>Building digital experiences with unity, unreal and react.</h2>
        </div>
    );
};

export default Avatar;
