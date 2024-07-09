import Link from "next/link";
import classes from "@/app/page.module.css";
import Image from "next/image";

export default function ContactIcon({
    id,
    href,
    imageSrc,
    imageAlt,
    extraImgClasses,
}: {
    id: string;
    href: string;
    imageSrc: string;
    imageAlt?: string;
    extraImgClasses?: string;
}) {
    return (
        <Link id={id} href={href} target="_blank">
            <Image
                className={`${classes.contactIcon} ${classes.hoverFlying} ${extraImgClasses ?? ""}`}
                src={imageSrc}
                alt={imageAlt === undefined ? id : imageAlt}
            />
        </Link>
    );
}
