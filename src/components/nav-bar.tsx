"use client";
import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { usePathname } from "next/navigation";

const NavItem = (props: { active: boolean; icon: React.ReactNode; name?: string; path: string }) => {
    return (
        <Link
            className={`group relative rounded-xl hover:bg-[#F8F8F8] hover:text-neutral-800 ${
                props.active
                    ? "bg-[#F8F8F8] p-3 text-neutral-800 shadow-sm ring-[0.05rem] ring-gray-200"
                    : "p-3 text-neutral-400"
            }`}
            href={props.path}>
            {React.cloneElement(props.icon as React.ReactElement, { size: 24 })}
            {props.active ? null : (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full xl:block">
                    <div className="translate-x-0 rounded-md bg-gray-900 bg-opacity-85 px-3 py-1 font-normal text-white opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                        {props.name}
                    </div>
                </div>
            )}
        </Link>
    );
};

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className="z-50 flex flex-row justify-center gap-3 border-[0.05rem] border-gray-200 bg-white p-3 sm:gap-8 xl:h-full xl:flex-col xl:gap-3">
            {navItems.map((x, idx) => (
                <NavItem key={idx} active={pathname === x.path} icon={x.icon} path={x.path} name={x.name} />
            ))}
        </nav>
    );
};

export default NavBar;
