import { Comic } from "../domain/comic";

interface IComicService {
    getComic: () => Promise<Comic>;
}

export type { IComicService };
