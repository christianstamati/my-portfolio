import React from "react";
import Feature from "@/components/feature";
import { Gamepad2, Package } from "lucide-react";
import Avatar from "@/components/avatar";
import Container from "@/components/container";
import { projects } from "@/lib/data";
import Card from "@/components/card";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function HomePage() {
    return (
        <div className="flex w-full items-center justify-center border-b-[0.05rem] border-gray-200 py-16">
            <div className="w-full max-w-[1280px] px-4">
                <h1 className="text-4xl font-medium leading-tight md:text-5xl">
                    Building apps with <br /> unity, unreal and react.
                </h1>
            </div>
        </div>
    );
}

function HomePageBackup() {
    return (
        <div>
            <section className="h-screen">
                <video
                    className="h-full w-full object-cover"
                    src={"/static/videos/home-video.mp4"}
                    autoPlay
                    playsInline
                    loop
                    muted></video>
            </section>
            <section className="flex justify-center">
                <Container>
                    <div className="md:grid md:grid-cols-12">
                        <h1 className="col-span-12 col-start-4 my-8 text-3xl font-medium md:my-12 md:text-4xl lg:text-5xl xl:text-6xl">
                            The exponential growth of 3D experiences is imminent, with cloud-based product
                            customization, swift model creation, and the integration of mixed reality poised to have a
                            profound impact on our digital interactions and daily experiences.
                        </h1>
                        <div className="gap col-span-12 col-start-4 my-8 flex gap-8 md:my-12">
                            <Feature
                                icon={<Package />}
                                title={"Customized product experience"}
                                description={
                                    "Enhancing online shopping by allowing users to interact with virtual versions of products."
                                }
                            />
                            <Feature
                                icon={<Gamepad2 />}
                                title={"Entertainment and Gaming"}
                                description={
                                    "Elevating gaming experiences with immersive 3D environments and interactive storytelling."
                                }
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="my-12 flex items-center justify-center">
                <Avatar />
            </section>
            <section className="my-8 flex flex-col items-center justify-center">
                <h3 className="my-8 text-center text-2xl">Selected Projects</h3>
                <Container>
                    <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"}>
                        {projects.map((p, index) => (
                            <Card
                                key={index}
                                title={p.name}
                                description={p.shortDescription}
                                image={p.cover}
                                badge={p.badge}
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <section className="my-32">
                <h2 className="text-center text-5xl font-medium xl:text-6xl">Contact me</h2>
                <p className="text-center">
                    Have questions or just want to say hi? <br /> Drop me a message
                </p>
                <div className="my-16 flex justify-center px-4">
                    <ContactForm />
                </div>
            </section>
            <Footer />
        </div>
    );
}
