import React from "react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
    return (
        <header className="fixed z-50 flex w-full items-center justify-between bg-gray-200 p-4 px-16">
            <Logo size={"32"} color={"black"} />

            <nav className={"flex w-full justify-end gap-4 px-4"}>
                <Link href={"/"}>home</Link>
                <Link href={"/"}>about</Link>
                <Link href={"/"}>blog</Link>
            </nav>

            <Button>Contact me</Button>
        </header>
    );
};

export default NavBar;
