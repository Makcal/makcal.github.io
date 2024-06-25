import settings from "./settings";


async function loadComic() {
    let comicId = await fetch(
        settings.comic_api.GET_COMIC_ID_URL
        + '?'
        + new URLSearchParams({email: settings.comic_api.EMAIL}).toString()
    ).then(
        r => r.text()
    ).then(
        text => parseInt(text)
    );

    let data = await fetch(
        settings.comic_api.GET_COMIC_URL + '?' + new URLSearchParams({id: comicId.toString()}).toString()
    ).then(
        r => r.json()
    );

    let {img, alt} = data;
    let title = data["safe_title"];
    // noinspection JSCheckFunctionSignatures
    let date = new Date(...[data['year'], data['month'], data['day']].map(x => parseInt(x)));

    const imageElement = document.createElement("img");
    imageElement.id = "comic-image";
    imageElement.src = img;
    imageElement.alt = alt;
    document.getElementById("image-block").appendChild(imageElement);

    const titleElement = document.createElement("h2");
    titleElement.id = "comic-title";
    titleElement.textContent = `Title: ${title}`;
    document.getElementById("header-block").appendChild(titleElement);

    const publishDateElement = document.createElement("h2");
    publishDateElement.id = "publish-date";
    publishDateElement.textContent = `Published: ${date.toLocaleDateString()}`;
    document.getElementById("header-block").appendChild(publishDateElement);
}

window.onload = async () => { await loadComic(); }
