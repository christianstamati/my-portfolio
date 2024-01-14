import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
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
            <div className="flex w-full max-w-[1000px] flex-col gap-y-4 px-4 py-16">
                <div className="flex items-center text-neutral-400">
                    <User className="mr-2" size={21} />
                    <p className="text-xs font-medium tracking-widest">ABOUT ME</p>
                </div>
                <h1 className="text-3xl font-medium md:text-5xl md:leading-tight">Let me introduce myself</h1>
                <p className={`${cabinetGrotesk.className} font-normal`}>
                    I am a developer based in Italy with a strong passion for creating digital products. I thoroughly
                    enjoy the entire process, starting from the initial idea presented by stakeholders, then moving on
                    to UX/UI design, and finally, implementing the solution through code.
                    <br />
                    <br />
                    My educational background includes studying Graphic Design at ISSM high-school in Venice, followed
                    by earning my bachelor&apos;s degree in Creative Technology at NABA in Milan. During my university
                    years, I gained experience working with Unity and Unreal Engine. After graduation, I had the
                    privilege of being selected to participate in a virtual production project as a Technical Artist,
                    which was a valuable opportunity to contribute to a significant project.
                    <br />
                    <br />
                    As a developer, I am dedicated to delivering functional and professional solutions. I often
                    collaborate closely with stakeholders to plan the system&apos;s architecture, aiming to achieve the
                    best possible design solution. Rather than describing my skills further, I prefer to showcase my
                    work for your evaluation. Feel free to take a look at my portfolio.
                </p>
            </div>
        </div>
    );
}
