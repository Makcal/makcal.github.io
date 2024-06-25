import {Comic} from "../domain/comic";


interface IComicService {
    getComic: () => Promise<Comic>;
}

export {IComicService}
