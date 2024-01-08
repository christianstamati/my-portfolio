import React from "react";
import Image from "next/image";

type CardProps = {
    image: string;
    badge?: string;
    title: string;
    category: string;
};

const Card = (props: CardProps) => {
    return (
        <div className="relative aspect-square overflow-hidden rounded-xl p-8 shadow-md">
            <Image className="-z-10 object-cover" src={props.image} alt={"portrait"} fill priority />
            {props.badge ? <p>{props.badge}</p> : null}
            <h3 className="text-4xl font-medium">{props.title}</h3>
            <p className="mt-4 w-fit rounded-full border-2 border-gray-200 px-4 py-1 text-xl">{props.category}</p>
        </div>
    );
};

export default Card;
