import { Metadata } from "next";
import classes from "./page.module.css";
import PageBlock from "@/components/PageBlock";
import BlockPart from "@/components/BlockPart";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { IComicService } from "@/app/(scripts)/application/comic-service";
import { ComicFetcher } from "@/app/(scripts)/infrastructure/comic-api";

export const metadata: Metadata = {
    title: "Comic",
};

const comicApi: IComicService = new ComicFetcher();

export default async function ComicPage() {
    const comic = await comicApi.getComic();

    const publishDate = comic.publishDate;
    const publishDateString = publishDate.toLocaleDateString();
    const publishTimeFromNow = formatDistanceToNow(publishDate, { addSuffix: true });

    return (
        <>
            <PageBlock styles={{ backgroundColor: "#6ca3cc" }}>
                <BlockPart flexBasis="100%">
                    <div className={classes.blockPart}>
                        <h1 className={classes.headingPageTitle}>
                            This is <span className={classes.headerSpan}>a comic</span>
                        </h1>
                        <h2 className={`${classes.comicInfo}`}>{comic.title}</h2>
                        <h2
                            className={`${classes.comicInfo}`}
                        >{`Published: ${publishDateString}, ${publishTimeFromNow}`}</h2>
                    </div>
                </BlockPart>
            </PageBlock>
            <PageBlock styles={{ backgroundColor: "#6ca3cc" }}>
                <BlockPart flexBasis="100%">
                    <div className={`${classes.imagePart} ${classes.blockPart}`}>
                        <Image className={classes.comicImage} alt={comic.alt} src={comic.imgUrl.toString()} />
                    </div>
                </BlockPart>
            </PageBlock>
        </>
    );
}
