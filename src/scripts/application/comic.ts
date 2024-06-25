import {Comic} from "../domain/comic";


interface IComicApi {
    getComic: () => Promise<Comic>;
}

export {IComicApi}
