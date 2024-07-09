import classes from "./ProjectList.module.css";
import ContactIcon from "@/components/index/ContactIcon";
import ProjectItem from "@/components/index/ProjectItem";
import React from "react";

const projects = {
    gigatester: {
        name: "Gigatester",
        description:
            "Created for my classmates this local system allows finding mistakes in your code for\n" +
            "Codeforces and similar educational tasks via running the program on random tests.",
    },
    innohassleRooms: {
        name: "InNoHassle-Rooms [WIP]: ",
        description:
            "InNoHassle-Rooms is a part of InNoHassle ecosystem that helps students with\n" +
            "cohabitation. It provides tools for setting up and monitoring shared duties and room\n" +
            "rules.",
    },
    cpptoplantuml: {
        name: "C++ to PlantUML",
        description: "A Python script for parsing C++ code and generating a rough UML class diagram.",
    },
};

export default function ProjectList() {
    return (
        <>
            <h2 className={classes.projectListHeader}>
                <ContactIcon
                    id="gh-link"
                    href="https://github.com/Makcal"
                    imageAlt="github"
                    imageSrc={"/images/icons/github-icon.svg"}
                    extraImgClasses={classes.githubLogo}
                />
                List of projects:
            </h2>
            <ol className={classes.projectList}>
                <ProjectItem description={projects.gigatester.description}>
                    <a href="https://github.com/Makcal/Gigatester" target="_blank">
                        {projects.gigatester.name}
                    </a>
                </ProjectItem>
                <ProjectItem description={projects.innohassleRooms.description}>
                    {projects.innohassleRooms.name}
                    <a href="https://github.com/one-zero-eight/InNoHassle-Rooms" target="_blank">
                        API
                    </a>{" "}
                    +{" "}
                    <a href="https://github.com/one-zero-eight/InNoHassle-RoomsBot" target="_blank">
                        Bot
                    </a>
                </ProjectItem>
                <ProjectItem description={projects.cpptoplantuml.description}>
                    <a href="https://github.com/Makcal/CppToPlantUML" target="_blank">
                        {projects.cpptoplantuml.name}
                    </a>
                </ProjectItem>
            </ol>
        </>
    );
}
