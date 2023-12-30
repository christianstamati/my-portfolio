import React from "react";
import Image from "next/image";

type CardProps = {
    image: string;
    badge?: string;
    title: string;
    description: string;
};

const Card = ({ image, badge, title, description }: CardProps) => {
    return (
        <div className="relative aspect-square overflow-hidden rounded-xl p-6 shadow-md">
            <Image className="-z-10 object-cover" src={image} alt={"portrait"} fill />
            {badge ? <p>{badge}</p> : null}
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
