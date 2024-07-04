<script lang="ts">
    import {formatDistanceToNow} from "date-fns";

    import { onMount } from "svelte";

    import HomeButton from "../components/HomeButton.svelte";

    import type {Comic} from "../lib/domain/comic";
    import type {IComicService} from "../lib/application/comic-service";
    import {ComicFetcher} from "../lib/infrastructure/comic-api";

    let comicApi: IComicService = new ComicFetcher();
    interface ViewData {
        comic: Comic,
        published: string,
    }
    let viewData: ViewData | null = null;

    loadComic();
    async function loadComic() {
        let comic = await comicApi.getComic();

        let publishDate = comic.publishDate;
        let publishDateString = publishDate.toLocaleDateString();
        let publishTimeFromNow = formatDistanceToNow(publishDate, {addSuffix: true});

        viewData = {
            comic,
            published: `Published: ${publishDateString}, ${publishTimeFromNow}`,
        }
    }

    let smallScreen = false;
    onMount(() => {
        const query = window.matchMedia(`screen and (max-width: 700px)`);

        const onChange = () => smallScreen = query.matches;
        query.addEventListener('change', onChange);
        onChange();

        return () => query.removeEventListener('change', onChange);
    });
</script>

<HomeButton/>
<div id="header-block" class="page-block">
    <h1 id="header-title" style="font-size: {smallScreen ? '3em' : '4em'}">
        This is <span id="header-span">a comic</span>
    </h1>
    {#if viewData != null}
        <h2 id="comic-title" class="comic-info">{viewData.comic.title}</h2>
        <h2 id="publish-date" class="comic-info">{viewData.published}</h2>
    {/if}
</div>
<div id="image-block" class="page-block">
    {#if viewData != null}
        <img id="comic-image" alt={viewData.comic.alt} src={viewData.comic.imgUrl.toString()}>
    {/if}
</div>


<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        color: #1f2525;
        font-family: "Arial", sans-serif;
    }

    .page-block {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em;
        background-color: #6ca3cc;
        box-sizing: border-box;
    }

    #header-title {
        font-size: 4em;
        font-weight: 400;
        text-shadow: 0 0 2px white;
    }

    @font-face {
        font-family: 'Ldfcomicsans';
        src: url('/fonts/Ldfcomicsans.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    #header-span {
        font-family: 'Ldfcomicsans', sans-serif;
        text-decoration: underline dotted;
    }

    .comic-info {
        font-weight: normal;
    }

    #image-block {
        padding-top: 0;
    }

    #comic-image {
        border: #b4f4e2 solid 0.3em;
        border-radius: 1em;
        width: 100%;
        max-width: 50em;
    }

    @media screen and (max-width: 700px) {
        #header-block {
            padding-top: 3em;
        }

        #header-title {
            font-size: 3em;
        }
    }
</style>
