import classes from "./ProjectList.module.css";
import React from "react";
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({ subsets: ["latin"] });

export default function ProjectItem({ description, children }: { description?: string; children: React.ReactNode }) {
    return (
        <li className={`${classes.projectItem} ${montserratFont.className}`}>
            {children}
            {description !== undefined && (
                <ul className={classes.projectDescription}>
                    <li>{description}</li>
                </ul>
            )}
        </li>
    );
}
