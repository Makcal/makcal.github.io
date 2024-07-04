import type { IComicService } from "../application/comic-service";
import type { Comic } from "../domain/comic";
import { consts } from "../settings/comic-consts";

interface ComicData {
    title: string;
    safe_title: string;
    img: string;
    alt: string;
    transcript: string;
    link?: string;
    year: number;
    month: number;
    day: number;
}

class ComicFetcher implements IComicService {
    private readonly apiConsts = consts;

    async getComicId(): Promise<number> {
        const response = await fetch(
            this.apiConsts.COMIC_ID_URL +
                "?" +
                new URLSearchParams({ email: this.apiConsts.EMAIL }).toString(),
        );
        return (await response.json()) as number;
    }

    async getComic(): Promise<Comic> {
        const response = await fetch(
            this.apiConsts.COMIC_URL +
                "?" +
                new URLSearchParams({
                    id: (await this.getComicId()).toString(),
                }).toString(),
        );
        const rawComic: ComicData = await response.json();
        return {
            title: rawComic.safe_title,
            imgUrl: new URL(rawComic.img),
            alt: rawComic.alt,
            publishDate: new Date(
                rawComic.year,
                rawComic.month - 1,
                rawComic.day,
            ),
        };
    }
}

export { ComicFetcher };
