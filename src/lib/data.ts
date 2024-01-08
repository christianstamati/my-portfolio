import React from "react";
import { Home, User, File, Briefcase, MessageCircle, Youtube, Instagram, Linkedin, Github } from "lucide-react";

export const appInfo = {
    name: "Personal Portfolio",
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
        icon: React.createElement(File),
        path: "/resume",
    },
    {
        name: "Projects",
        icon: React.createElement(Briefcase),
        path: "/projects",
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
        category: "app",
    },
    {
        name: "WeCONF",
        cover: "/static/images/project-2.jpeg",
        badge: undefined,
        shortDescription: "Developed with Next.JS using JavaScript and styled with Tailwind CSS.",
        category: "app",
    },
    {
        name: "Modesto",
        cover: "/static/images/project-3.jpeg",
        badge: undefined,
        shortDescription: "Create the perfect outfit for your cerimony.",
        category: "app",
    },
] as const;

export const resume = {
    location: "VENICE, ITALY",
    name: "Christian",
    surname: "Stamati",
    experiences: [
        {
            jobTitle: "Software Developer",
            company: "We Wear",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
            time: "nov 2020 — Present",
        },
        {
            jobTitle: "Technical Artist",
            company: "NABA",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
            time: "feb 2021 — mag 2021",
        },
        {
            jobTitle: "Freelance Videographer",
            company: "Self-employed worker",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
            time: "set 2018 — nov 2020",
        },
    ] as const,
    educations: [
        {
            school: "NABA",
            study: "Bachelor degree in New Technologies",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
            time: "2017 — 2020",
        },
        {
            school: "Istituto Salesiano San Marco - ITT",
            study: "Graphic Design & Communication",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
            time: "2014 — 2017",
        },
        {
            school: "Istituto Salesiano San Marco - CFP",
            study: "Graphic and printing equipment operator",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
            time: "2011 — 2014",
        },
    ] as const,
    skills: [
        {
            name: "UI/UX design",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
        },
        {
            name: "Programming",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
        },
        {
            name: "3D",
            description:
                "Lorem Ipsumè un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta",
        },
    ] as const,
} as const;
