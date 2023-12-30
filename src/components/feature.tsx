import React, { ReactNode } from "react";
import { Box } from "lucide-react";

const Feature = ({ icon, title, description }: { icon?: ReactNode; title: string; description: string }) => {
    return (
        <div className="flex w-full flex-col gap-y-3">
            {icon ? (
                <div className="w-fit rounded-full bg-neutral-100 p-4">
                    {React.cloneElement(icon as React.ReactElement, { size: 24 })}
                </div>
            ) : null}
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-md font-normal">{description}</p>
        </div>
    );
};

export default Feature;
