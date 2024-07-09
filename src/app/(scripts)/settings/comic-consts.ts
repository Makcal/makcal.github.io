interface ComicApiConsts {
    readonly COMIC_ID_URL: URL;
    readonly COMIC_URL: URL;
    readonly EMAIL: string;
}

const consts: ComicApiConsts = {
    EMAIL: "m.fomin@innopolis.university",
    COMIC_ID_URL: new URL("https://fwd.innopolis.university/api/hw2"),
    COMIC_URL: new URL("https://fwd.innopolis.university/api/comic"),
};

export { consts };
export type { ComicApiConsts };
