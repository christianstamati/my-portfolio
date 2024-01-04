import React from "react";
import { Home, User, ScrollText, Briefcase, MessageCircle, Youtube, Instagram, Linkedin, Github } from "lucide-react";

export const appInfo = {
    name: "Portfolio",
    credits: "Christian Stamati",
    developer_url: "https://www.christianstamati.com/",
    version: 0.1,
} as const;

export const navItems = [
    {
        name: "Home",
        icon: React.createElement(Home),
        path: "/",
    },
    {
        name: "About",
        icon: React.createElement(User),
        path: "/about",
    },
    {
        name: "Resume",
        icon: React.createElement(ScrollText),
        path: "/resume",
    },
    {
        name: "Work",
        icon: React.createElement(Briefcase),
        path: "/work",
    },
    {
        name: "Contact",
        icon: React.createElement(MessageCircle),
        path: "/contact",
    },
] as const;

export const socials = [
    {
        name: "Youtube",
        icon: React.createElement(Youtube),
        path: "https://www.youtube.com/channel/UC3UWe4kYc30ja1FMawxrNhw",
    },
    {
        name: "Linkedin",
        icon: React.createElement(Linkedin),
        path: "https://www.linkedin.com/in/christianstamati/",
    },
    {
        name: "Instagram",
        icon: React.createElement(Instagram),
        path: "https://www.instagram.com/christianstamati/",
    },
    {
        name: "Github",
        icon: React.createElement(Github),
        path: "https://github.com/christianstamati",
    },
] as const;

export const projects = [
    {
        name: "WeAVTR",
        cover: "/static/images/project-1.jpeg",
        badge: undefined,
        shortDescription: "The definitive solution to build your Avatars.",
    },
    {
        name: "WeCONF",
        cover: "/static/images/project-2.jpeg",
        badge: undefined,
        shortDescription: "Developed with Next.JS using JavaScript and styled with Tailwind CSS.",
    },
    {
        name: "Modesto",
        cover: "/static/images/project-3.jpeg",
        badge: undefined,
        shortDescription: "Create the perfect outfit for your cerimony.",
    },
] as const;
