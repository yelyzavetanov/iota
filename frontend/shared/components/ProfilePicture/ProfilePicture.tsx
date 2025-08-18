"use client"

import React, {useEffect, useState} from "react";
import {ProfilePictureProps} from "./types";

const ProfilePicture = ({src}: ProfilePictureProps) => {

    const [randomSrc, setRandomSrc] = useState<string | null>(null);

    useEffect(() => {
        const index = Math.floor(Math.random() * 4);
        setRandomSrc(`./images/profilePictures/pic${index}.jpg`);
    }, []);

    return (
        <div className="h-16 w-16 border-transparent p-1 rounded-full box-border group-hover:border-accent">
            <img
                className={"rounded-full h-full w-full"}
                src={src || randomSrc || undefined}
                alt={src}
            />
        </div>
    )
}

export default ProfilePicture