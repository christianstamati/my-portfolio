import React from "react";
import { ArrowDownToLine, MapPin } from "lucide-react";
import Separator from "@/components/separator";
import { resume } from "@/lib/data";
import ResumeParagraph from "@/components/resume-paragraph";
import { Button } from "@/components/ui/button";
export default function ResumePage() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-[1000px] items-end justify-between gap-y-4 px-4 py-16">
                <div>
                    <div className="flex text-neutral-400">
                        <MapPin className="mr-2" />
                        <p className="font-medium tracking-widest">VENICE, ITALY</p>
                    </div>
                    <h1 className="text-3xl font-medium md:text-5xl md:leading-tight">Christian Stamati</h1>
                </div>

                <Button className="text-md rounded-2xl p-7 font-normal md:text-xl" variant={"outline"}>
                    <ArrowDownToLine className="mr-2" size={21} />
                    <p>Download</p>
                </Button>
            </div>
            <Separator />
            <div className="flex w-full max-w-[1000px] flex-col gap-y-20 px-4 py-16">
                <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                    <p className="text-sm font-medium tracking-widest text-neutral-400">EXPERIENCE</p>
                    <div className="flex flex-col gap-y-12">
                        {resume.experiences.map((x, index) => (
                            <ResumeParagraph
                                key={index}
                                title={x.jobTitle}
                                description={x.description}
                                company={x.company}
                                time={x.time}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                    <p className="text-sm font-medium tracking-widest text-neutral-400">EDUCATION</p>
                    <div className="flex flex-col gap-y-12">
                        {resume.educations.map((x, index) => (
                            <ResumeParagraph
                                key={index}
                                title={x.school}
                                description={x.description}
                                company={x.study}
                                time={x.time}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                    <p className="text-sm font-medium tracking-widest text-neutral-400">SKILLS</p>
                    <div className="flex flex-col gap-y-12">
                        {resume.skills.map((x, index) => (
                            <ResumeParagraph key={index} title={x.name} description={x.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
