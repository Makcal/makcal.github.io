"use client";

import classes from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const pages = [
    { path: "/", name: "Portfolio" },
    { path: "/comic", name: "Comic" },
];

function isCurrent(path: string, current: string) {
    if (current.endsWith("index.html")) {
        current = current.slice(0, -"index.html".length);
    }
    if (current.at(-1) === "/" && path !== "/") {
        current = current.slice(0, -1);
    }
    return path == current;
}

export default function Header() {
    const pathname = usePathname();

    let [headerLinks, setHeaderLinks] = useState<React.ReactNode[]>([]);
    useEffect(() => {
        let updated = [];
        for (let { path, name } of pages) {
            updated.push(
                <div key={path} className={`${classes.pageLink} ${isCurrent(path, pathname) && classes.currentLink}`}>
                    <Link href={path}>{name}</Link>
                </div>,
            );
        }
        setHeaderLinks(updated);
    }, [pathname]);

    return <header className={classes.header}>{headerLinks}</header>;
}
