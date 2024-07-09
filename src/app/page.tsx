import classes from "./page.module.css";
import type { Metadata } from "next";
import PageBlock from "@/components/PageBlock";
import Separator from "@/components/Separator";
import BlockPart from "@/components/BlockPart";
import Link from "next/link";
import ContactIcon from "@/components/index/ContactIcon";
import AppearAnimation from "@/components/AppearAnimation";
import ProjectList from "@/components/index/ProjectList";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function PortfolioPage() {
    return (
        <>
            <PageBlock styles={{ backgroundImage: "linear-gradient(70deg, #467ca5 30%, #da7676 85%)" }}>
                <BlockPart flexBasis={"40%"}>
                    <div className={`${classes.blockPart} ${classes.photoPart} ${classes.appearAnim}`}>
                        <h1 className={`${classes.name}`}>Maxim Fomin</h1>
                        <Image className={classes.photo} src="/images/photo.jpg" alt="photo" />
                    </div>
                </BlockPart>
                <BlockPart flexBasis={"60%"}>
                    <div className={`${classes.blockPart} ${classes.aboutPart} ${classes.appearAnim}`}>
                        <h2 className={`${classes.aboutMeHeading} ${classes.heading}`}>About me</h2>
                        <div className={classes.aboutMe}>
                            <p className={classes.aboutMeParagraph} style={{ paddingBottom: 0 }}>
                                Hi! I{"'"}m a 1st year bachelor student of
                                <Link
                                    id="iu-link"
                                    className={`${classes.iuLink} ${classes.hoverFlying}`}
                                    href="https://innopolis.university/en/"
                                    target="_blank"
                                >
                                    <Image className={classes.iuLogo} src="/images/icons/iu.ico" alt="iu-logo" />
                                    <span className={classes.iuName}>Innopolis University</span>
                                </Link>
                            </p>
                            <p className={classes.aboutMeParagraph} style={{ paddingBottom: 0 }}>
                                I am mainly a Python backend developer but also know most common languages such as C,
                                C++, Java, C#, JavaScript, SQL, etc. and have a bit of experience in frontend, robotics,
                                DevOps, GameDev.
                            </p>
                            <p className={classes.aboutMeParagraph}>
                                My passion is learning and problem-solving, so I can easily adapt to new conditions.
                                Secondly, I make a lot of efforts to help others. For example, I conduct lecture-like
                                sessions and other activities to prepare people to tests and exams in the university.
                            </p>
                            <p className={classes.aboutMeParagraph}>
                                Fun fact: someone could call me a watermelon ambassador in the university!
                            </p>
                        </div>
                        <h3 className={`${classes.contactsHeading} ${classes.heading}`}>Contacts</h3>
                        <div className={classes.contacts}>
                            <ContactIcon
                                id="email"
                                href="mailto:fominmaxim3721@gmail.com"
                                imageSrc="/images/icons/email-icon.png"
                            />
                            <ContactIcon
                                id="vk-link"
                                href="https://vk.com/maximf3"
                                imageSrc="/images/icons/vk-icon.png"
                                imageAlt="vk"
                            />
                            <ContactIcon
                                id="tg-link"
                                href="https://t.me/chelekushka"
                                imageSrc="/images/icons/telegram-icon.png"
                                imageAlt="telegram"
                            />
                            <span style={{ fontSize: "0.8em" }}>(Telegram is preferred)</span>
                        </div>
                    </div>
                </BlockPart>
            </PageBlock>
            <Separator />
            <PageBlock styles={{ backgroundColor: "#9fcca7", padding: "2em 2em 2em 3em" }}>
                <BlockPart>
                    <div className={`${classes.blockPart} ${classes.appearAnim}`}>
                        <ProjectList />
                    </div>
                </BlockPart>
                <BlockPart>
                    <div className={`${classes.blockPart} ${classes.appearAnim}`}>
                        <h3 className={`${classes.topProjectHeading} ${classes.heading}`}>The best project</h3>
                        <Image className={classes.topProjectDemo} src="/images/tester_demo.gif" alt="tester demo" />
                        <Link className={classes.topProjectCaption} href="http://84.235.249.242/" target="_blank">
                            {"Visit gigatester"}
                        </Link>
                    </div>
                </BlockPart>
            </PageBlock>
            <Separator />
            <PageBlock styles={{ backgroundColor: "#d1cfdb", height: "30em", padding: "1em" }}>
                <BlockPart flexBasis="100%">
                    <div className={`${classes.comicPart} ${classes.blockPart} ${classes.appearAnim}`}>
                        <p>Wanna read a comic? Press da button!</p>
                        {/* A button that act as just a link should be a link for better compatibility */}
                        <Link className={classes.comicButton} href="/comic">
                            See a comic
                        </Link>
                    </div>
                </BlockPart>
            </PageBlock>
            <AppearAnimation />
        </>
    );
}
