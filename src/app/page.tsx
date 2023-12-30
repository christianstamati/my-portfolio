import React from "react";
import Feature from "@/components/feature";
import { Gamepad2, Package } from "lucide-react";
import Avatar from "@/components/avatar";

export default function Home() {
    return (
        <main>
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
                <div className="w-full px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
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
                </div>
            </section>

            <section className="my-24 flex items-center justify-center">
                <Avatar />
            </section>
        </main>
    );
}
