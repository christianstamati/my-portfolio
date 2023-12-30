import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Container = ({ className, children }: { children?: ReactNode; className?: string }) => {
    return (
        <div className={cn("flex w-full justify-center", className)}>
            <div className="w-full px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
                {children}
            </div>
        </div>
    );
};

export default Container;
