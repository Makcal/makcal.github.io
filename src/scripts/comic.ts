import {IComicService} from "./application/comic-service";
import {ComicFetcher} from "./infrastructure/comic-api";
import {formatDistanceToNow} from "date-fns";


async function loadComic(comicApi: IComicService): Promise<void> {
    let comic = await comicApi.getComic();

    const imageElement = document.createElement("img");
    imageElement.id = "comic-image";
    imageElement.src = comic.imgUrl.toString();
    imageElement.alt = comic.alt;
    let imageBlock = document.getElementById("image-block") as HTMLElement;
    imageBlock.appendChild(imageElement);

    function createHeader(id: string, text: string): HTMLHeadingElement {
        const element = document.createElement("h2");
        element.id = id;
        element.textContent = text;
        return element;
    }

    let headerBlock = document.getElementById("header-block") as HTMLElement;
    headerBlock.appendChild(createHeader("comic-title", "Title: " + comic.title));
    let publishDate = comic.publishDate;
    let publishDateString = publishDate.toLocaleDateString();
    let publishTimeFromNow = formatDistanceToNow(publishDate, {addSuffix: true});
    headerBlock.appendChild(
        createHeader(
            "publish-date",
            `Published: ${publishDateString}, ${publishTimeFromNow}`
        )
    );
}

window.onload = async () => {
    await loadComic(new ComicFetcher());
}
