import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/newsletter";

const Footer = () => {
    return (
        <Container className="bg-gray-50">
            <div className="my-20 grid gap-y-8 sm:grid-cols-2  xl:grid-cols-4">
                <div>
                    <h4 className="mb-2 font-bold">EMAIL ADDRESS</h4>
                    <p>hello@christianstamati.com</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="mb-2 font-bold">SITE MAP</h4>
                    <Link href={"/"}>home</Link>
                    <Link href={"/"}>about</Link>
                    <Link href={"/"}>blog</Link>
                    <Link href={"/"}>contact</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="mb-2 font-bold">SOCIAL</h4>
                    <Link href={"/"}>youtube</Link>
                    <Link href={"/"}>linkedin</Link>
                    <Link href={"/"}>instagram</Link>
                    <Link href={"/"}>x</Link>
                </div>
                <div>
                    <h4 className="mb-2 font-bold">NEWSLETTER</h4>
                    <Newsletter />
                </div>
            </div>
        </Container>
    );
};

export default Footer;
