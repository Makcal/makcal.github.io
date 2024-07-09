"use client";

import { useEffect } from "react";
import classes from "@/app/page.module.css";

export default function AppearAnimation() {
    useEffect(() => {
        // const animated_parts = ["#photo-part", "#about-part", "#project-list-part", "#top-project-part"];
        const animated_parts = [...document.querySelectorAll(`.${classes.appearAnim}`)];
        const delay_step = 0.5;
        const animation_duration = 1;

        for (let i = 1; i <= animated_parts.length; i++) {
            let element = animated_parts[i - 1] as HTMLElement;
            let delay = delay_step * i;
            element.style.animationDelay = `${delay}s`;
            element.style.animationPlayState = "running";
            setTimeout(() => (element.style.opacity = "1"), (animation_duration + delay) * 1000);
        }
    }, []);

    return <></>;
}
