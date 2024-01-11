import React from "react";
import Image from "next/image";
import { MapPin, User } from "lucide-react";
import { cabinetGrotesk } from "@/lib/fonts";
export default function AboutPage() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative h-72 w-full overflow-hidden rounded-b-3xl">
                <Image
                    className="object-cover"
                    src={"/static/images/about-cover.png"}
                    alt={"about"}
                    fill
                    priority
                    quality={100}
                />
            </div>
            <div className="flex w-full max-w-[1280px] flex-col gap-y-4 px-4 py-16">
                <div className="flex items-center text-neutral-400">
                    <User className="mr-2" size={21} />
                    <p className="text-xs font-medium tracking-widest">ABOUT ME</p>
                </div>
                <h1 className="text-3xl font-medium md:text-5xl md:leading-tight">Let me introduce myself</h1>
                <p className={`${cabinetGrotesk.className} font-normal`}>
                    I’m a developer based in Italy with an avid passion for building digital products. I love the entire
                    process: from the initial idea from the steak holders, to the UX/UI design and finally to the actual
                    code implementation of the solution. <br /> I studied as a Graphic Designer at ISSM high-school in
                    Venice and then I moved in Milan where I got my bachelor degree at NABA as a Creative Technologist.
                    During the university years I learned to work with Unity and Unreal Engine and after graduation I
                    was selected to participate at a virtual production project as a Technical Artist, it was a great
                    opportunity working on such a big project. <br /> As a developer, I strive to offer a functional and
                    professional solution. I often like to plan with the steak holders the architecture of the system so
                    we can come out with the best possible design solution. I would prefer to let my work speak for
                    itself so feel free to have a look through.
                </p>
            </div>
        </div>
    );
}
