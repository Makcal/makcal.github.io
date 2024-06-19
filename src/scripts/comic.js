const GET_COMIC_ID_URL = "https://fwd.innopolis.university/api/hw2"
const GET_COMIC_URL = "https://fwd.innopolis.university/api/comic"
const EMAIL = "m.fomin@innopolis.university"


async function loadComic() {
    let comicId = await fetch(
        GET_COMIC_ID_URL + '?' + new URLSearchParams({email: EMAIL}).toString()
    ).then(
        r => r.text()
    ).then(
        text => parseInt(text)
    );

    let data = await fetch(
        GET_COMIC_URL + '?' + new URLSearchParams({id: comicId.toString()}).toString()
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

loadComic().then();
