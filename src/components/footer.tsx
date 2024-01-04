"use client";
import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import Newsletter from "@/components/newsletter";
import { navItems, socials } from "@/lib/data";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    return (
        <Container className="bg-gray-50">
            <div className="my-40 grid gap-y-8 sm:grid-cols-2  xl:grid-cols-4">
                <div>
                    <h4 className="mb-2 text-xl font-medium">Christian Stamati</h4>
                    <p className="text-sm">
                        Built with{" "}
                        <Link className="hover:text-selection underline" target="_blank" href="https://nextjs.org/">
                            Next.js
                        </Link>{" "}
                        &{" "}
                        <Link
                            className="hover:text-selection underline"
                            target="_blank"
                            href="https://tailwindcss.com/">
                            Tailwind
                        </Link>
                    </p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-xs font-medium tracking-widest text-gray-400">PAGES</h4>
                    {navItems.map((x, idx) => (
                        <Link
                            key={idx}
                            className={`text-md hover:text-selection font-medium ${
                                x.path === pathname ? "text-selection" : "text-neutral-600"
                            }`}
                            href={x.path}>
                            {x.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-xs font-medium tracking-widest text-gray-400">SOCIALS</h4>
                    {socials.map((x, idx) => (
                        <Link
                            target="_blank"
                            key={idx}
                            className="text-md hover:text-selection flex gap-x-3 font-medium text-neutral-600"
                            href={x.path}>
                            {React.cloneElement(x.icon as React.ReactElement, { size: 21 })}
                            <p>{x.name}</p>
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-xs font-medium tracking-widest text-gray-400">NEWSLETTER</h4>
                    <Newsletter />
                </div>
            </div>
        </Container>
    );
};

export default Footer;
