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
                "Managed diverse projects in Unity, Unreal, and React. Developed numerous prototypes in Figma and translated UI designs into functional apps. Mainly maintained the We Wear app in Unity and built 3D configurators in Unreal.",
            time: "nov 2020 — Present",
        },
        {
            jobTitle: "Technical Artist",
            company: "NABA",
            description:
                "Oversaw the technical aspects of Unreal in the execution of a virtual production experiment. Managed the setup of the Unreal project for VP and crafted tools to enhance navigation within the virtual set, ensuring a seamless and efficient production process.",
            time: "feb 2021 — mag 2021",
        },
        {
            jobTitle: "Freelance Videographer",
            company: "Self-employed worker",
            description:
                "Wrote screenplays at university. Worked with Adobe Premiere and Resolve to edit and grade the videos for social media. Had experience with professional cameras and lights in studio and shoot numerous videos on gimbal.",
            time: "set 2018 — nov 2020",
        },
    ] as const,
    educations: [
        {
            school: "NABA",
            study: "Bachelor degree in New Technologies",
            description:
                "Resided in Milan for three years, where I pursued a degree in Creative Technologies at NABA, engaging in a new program comprising three key modules: Motion Graphics and VFX, Game Development, and 3D Modeling.",
            time: "2017 — 2020",
        },
        {
            school: "Istituto Salesiano San Marco - ITT",
            study: "Graphic Design & Communication",
            description:
                "Extended my educational journey at ISSM, focusing on advanced studies. Explored predominantly theoretical modules, delving into significant communication case studies and acquiring expertise in crafting brand identities",
            time: "2014 — 2017",
        },
        {
            school: "Istituto Salesiano San Marco - CFP",
            study: "Graphic and printing equipment operator",
            description:
                "Successfully completed a comprehensive three-year diploma program, graduating as a Graphic Operator. Engaged in predominantly practical lectures with a strong emphasis on mastering graphic design software.",
            time: "2011 — 2014",
        },
    ] as const,
    skills: [
        {
            name: "UI/UX design",
            description:
                "Adept at crafting seamless UI flows using Figma, coupled with prior experience utilizing Adobe XD.",
        },
        {
            name: "Programming",
            description:
                "Demonstrates proficiency in C# with additional expertise in JavaScript, Python, C++, and Blueprints. Possesses adaptability to quickly learn and work with new programming languages as required.",
        },
        {
            name: "3D",
            description:
                "Possesses a foundational understanding and practical knowledge of 3D modeling software, specifically demonstrating proficiency in both Blender and Maya.",
        },
    ] as const,
} as const;
