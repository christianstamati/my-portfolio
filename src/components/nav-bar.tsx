"use client";
import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { usePathname } from "next/navigation";

const NavItem = (props: { active: boolean; icon: React.ReactNode; name?: string; path: string }) => {
    return (
        <Link
            className={`rounded-xl hover:bg-[#F8F8F8] hover:text-neutral-800 ${
                props.active
                    ? "bg-[#F8F8F8] p-3 text-neutral-800 shadow-sm ring-[0.05rem] ring-gray-200"
                    : "p-3 text-neutral-400"
            }`}
            href={props.path}>
            {React.cloneElement(props.icon as React.ReactElement, { size: 24 })}
        </Link>
    );
};

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className="z-50 flex flex-row justify-center gap-2 border-[0.05rem] border-gray-200 bg-white p-2 sm:h-full sm:flex-col">
            {navItems.map((x, idx) => (
                <NavItem key={idx} active={pathname === x.path} icon={x.icon} path={x.path} />
            ))}
        </nav>
    );
};

export default NavBar;
