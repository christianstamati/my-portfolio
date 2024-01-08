import React from "react";
import { cabinetGrotesk } from "@/lib/fonts";

type ResumeParagraphProps = {
    title: string;
    company?: string;
    time?: string;
    description: string;
};

const ResumeParagraph = (props: ResumeParagraphProps) => {
    return (
        <div className="flex max-w-xl flex-col gap-y-4">
            <div>
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{props.title}</h3>
                    {props.time && <div>{props.time}</div>}
                </div>
                {props.company && <h4>{props.company}</h4>}
            </div>
            <p className={`${cabinetGrotesk.className} text-neutral-500`}>{props.description}</p>
        </div>
    );
};

export default ResumeParagraph;
