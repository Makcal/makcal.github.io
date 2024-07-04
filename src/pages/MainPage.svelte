<script lang="ts">
    import {onMount} from "svelte";

    import Separator from "../components/Separator.svelte";
    import ContactIcon from "../components/ContactIcon.svelte";
    import ProjectItem from "../components/ProjectItem.svelte";

    let projectList = {
        gigatester: {
            name: "Gigatester",
            link: "https://github.com/Makcal/Gigatester",
            description: "Created for my classmates this local system allows finding mistakes in your code for" +
                " Codeforces and similar educational tasks via running the program on random tests."
        },
        roomsApi: {
            name: "InNoHassle-Rooms API",
            link: "https://github.com/one-zero-eight/InNoHassle-Rooms",
            description: "InNoHassle-Rooms is a part of InNoHassle ecosystem that helps students with cohabitation. " +
                "It provides tools for setting up and monitoring shared duties and room rules."
        },
        roomsBot: {
            name: "InNoHassle-Rooms Bot",
            link: "https://github.com/one-zero-eight/InNoHassle-RoomsBot",
        },
        cppToUml: {
            name: "C++ to PlantUML",
            link: "https://github.com/Makcal/CppToPlantUML",
            description: "A Python script for parsing C++ code and generating a rough UML class diagram."
        }
    };

    onMount(() => animate());

    function animate() {
        // const animated_parts = ["#photo-part", "#about-part", "#project-list-part", "#top-project-part"];
        const animated_parts = [...document.querySelectorAll(".appear_anim")].map(e => '#' + e.id);
        const delay_step = 0.5;
        const animation_duration = 1;

        for (let i = 1; i <= animated_parts.length; i++) {
            let selector = animated_parts[i - 1];
            let elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
            for (let element of elements) {
                let delay = delay_step * i;
                element.style.animationDelay = `${delay}s`;
                element.style.animationPlayState = "running";
                setTimeout(
                    () => element.style.opacity = '1',
                    (animation_duration + delay) * 1000,
                )
            }
        }
    }
</script>

<div id="main-block" class="page-block">
  <div id="photo-part" class="block-part appear_anim" style="animation-delay: 0.5s">
    <h1 id="name">Maxim Fomin</h1>
    <img id="photo" src="/images/photo.jpg" alt="me">
  </div>
  <div id="about-part" class="block-part appear_anim" style="animation-delay: 1s">
    <h2 id="about-me-header">About me</h2>
    <div id="about-me">
      <p style="padding-bottom: 0">
        Hi! I'm a 1st year bachelor student of
        <a id="iu-link" class="no_underline hover_flying" href="https://innopolis.university/en/" target="_blank">
          <img id="iu-logo" src="/images/icons/iu.ico" alt="iu-logo">
          <span id="iu-name">Innopolis University</span>
        </a>.
      </p>
      <p style="padding-top: 0">
        I am mainly a Python backend developer but also know most common languages such as C, C++, Java, C#,
        JavaScript, SQL, etc. and have a bit of experience in frontend, robotics, DevOps, GameDev.
      </p>
      <p>
        My passion is learning and problem-solving, so I can easily adapt to new conditions.
        Secondly, I make a lot of efforts to help others.
        For example, I conduct lecture-like sessions and other activities to prepare people to
        tests and exams in the university.
      </p>
      <p>
        Fun fact: someone could call me a watermelon ambassador in the university!
      </p>
    </div>
    <h3 id="contacts-header">Contacts</h3>
    <div id="contacts">
      <ContactIcon url="mailto:fominmaxim3721@gmail.com" icon="/images/icons/email-icon.png" alt="email"/>
      <ContactIcon url="https://vk.com/maximf3" icon="/images/icons/vk-icon.png" alt="vk"/>
      <ContactIcon url="https://t.me/chelekushka" icon="/images/icons/telegram-icon.png" alt="telegram"/>
      <span style="font-size: 0.8em">(Telegram is preferred)</span>
    </div>
  </div>
</div>
<Separator/>
<div id="project-block" class="page-block">
  <div id="project-list-part" class="block-part appear_anim">
    <h2 id="project-list-header">
      <a id="gh-link" class="no_underline" href="https://github.com/Makcal" target="_blank">
        <img id="github-logo" class="hover_flying" src="/images/icons/github-icon.svg" alt="github">
      </a>
      List of projects:
    </h2>
    <ol id="project-list">
      <ProjectItem description={projectList.gigatester.description}>
        <a href={projectList.gigatester.link} target="_blank">{projectList.gigatester.name}</a>
      </ProjectItem>
      <ProjectItem description={projectList.roomsApi.description}>
        InNoHassle-Rooms [WIP]:
        <a href={projectList.roomsApi.link} target="_blank">API</a> +
        <a href={projectList.roomsBot.link} target="_blank">Bot</a>
      </ProjectItem>
      <ProjectItem description={projectList.cppToUml.description}>
        <a href={projectList.cppToUml.link} target="_blank">{projectList.cppToUml.name}</a>
      </ProjectItem>
    </ol>
  </div>
  <div id="top-project-part" class="block-part appear_anim">
    <h3 id="top-project-header">The best project</h3>
    <img id="top-project-demo" src="/images/tester_demo.gif" alt="tester demo">
    <a id="top-project-caption" href="http://84.235.249.242/" target="_blank">
      Visit gigatester
    </a>
  </div>
</div>
<Separator/>
<div id="comic-block" class="page-block">
  <div id="comic-part" class="block-part appear_anim">
    <p>Wanna read a comic? Press da button!</p>
    <!-- A button that act as just a link should be a link for better compatibility -->
    <a id="comic-button" href="/comic.html">See a comic</a>
  </div>
</div>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        font-family: "Arial", sans-serif;
    }

    a {
        color: darkblue;
    }

    .no_underline {
        text-decoration: none;
    }

    h1, h2, h3 {
        text-align: center;
        font-family: "Play", sans-serif;
        color: rgba(22, 22, 72, 0.97);
    }

    .page-block {
        width: 100%;
        min-height: 35em;
        display: flex;
        position: relative;
    }

    #main-block {
        background-image: linear-gradient(70deg, #467ca5 30%, #da7676 85%);
    }

    .block-part {
        flex-basis: 50%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #photo-part {
        flex-basis: 40%;
        padding: 2vh 2vw;
    }

    #name {
        margin-bottom: 2vh;
        font-family: "LXGW WenKai Mono TC", monospace;
        font-size: 2.8em;
        color: white;
        --name-outline-offset: 1px;
        --name-outline-blur: 0.1em;
        --name-outline-color: black;
        text-shadow: calc(-1*var(--name-outline-offset)) calc(-1*var(--name-outline-offset)) 2px var(--name-outline-color),
        calc(-1*var(--name-outline-offset)) calc(var(--name-outline-offset)) 2px var(--name-outline-color),
        calc(var(--name-outline-offset)) calc(-1*var(--name-outline-offset)) 2px var(--name-outline-color),
        calc(var(--name-outline-offset)) calc(var(--name-outline-offset)) 2px var(--name-outline-color);
    }

    #photo {
        height: 100%;
        border: 3px rgba(60, 76, 38, 0.46) solid;
        border-radius: 3px;
        box-shadow: 0 0 10vw rgba(0, 0, 0, 0.5);
        max-height: calc(min(45vh, 30em));
    }

    #about-part {
        flex-basis: 60%;
        padding: 2vh 5vw;
        color: #292538;
    }

    #about-me-header, #contacts-header {
        align-content: flex-end;
        margin-bottom: 0.5em;
        font-size: 2em;
    }

    #contacts-header {
        margin-top: 0.5em;
    }

    #about-me {
        text-indent: 2em;
        text-shadow: 1px 1px 2px rgb(65 64 64 / 20%);
        font-family: "Arial", sans-serif;
    }

    #about-me p {
        padding: 0.2em;
    }

    #project-block {
        background-color: #9fcca7;
        /*background-image: radial-gradient(ellipse 30% 17em at 75% 55%, #ff0000, #ff000000),*/
        /*                  linear-gradient(165deg, #bc85de 30%, #dde799 55%);*/
        height: fit-content;
        box-sizing: border-box;
        padding: 2em 2em 2em 3em;
    }

    #top-project-header {
        margin-bottom: 0.5em;
        text-shadow: #da7676 2px 2px 1px;
        font-size: 2.3em;
    }

    #top-project-demo {
        box-sizing: border-box;
        max-width: 80%;
        max-height: 60%;
        aspect-ratio: 1096/616;
        border-width: 5px;
        border-style: double;
        border-color: #467ca5;
        border-radius: 15px;
    }

    #top-project-caption {
        margin-top: 0.25em;
        font-size: 1.3em;
    }

    #project-list-header {
        font-size: 2em;
    }

    #project-list {
        padding: 1em 0;
    }

    #github-logo {
        height: 1em;
        margin: 0 0.1em;
        user-select: none;
    }

    .hover_flying {
        transition: translate 0.5s;
    }

    .hover_flying:hover {
        translate: 0 -0.25em;
    }

    #contacts {
        display: flex;
        align-items: center;
        font-size: 1.5em;
    }

    #iu-logo {
        height: 2em;
        vertical-align: middle;
    }

    #iu-name {
        color: #16b716;
        text-shadow: #1f6e16 1px 1px 1px;
    }

    #iu-link {
        text-indent: initial;
        display: inline-block;
    }

    .appear_anim {
        animation: appear;
        animation-duration: 1s;
        animation-play-state: paused;
        opacity: 0;
    }

    @keyframes appear {
        0% {
            translate: 0 -20vh;
            opacity: 0;
        }
        100% {
            translate: 0;
            opacity: 1;
        }
    }

    #comic-block {
        background-color: #d1cfdb;
        height: 30em;
        display: block;
    }

    #comic-part {
        height: 100%;
    }

    #comic-part p {
        font-size: 2em;
        padding-bottom: 1em;
        text-align: center;
    }

    #comic-button {
        width: fit-content;
        height: fit-content;
        font-size: 3em;
        padding: 0.5em;
        box-sizing: border-box;
        border-radius: 1em;
        background-color: #dbdbdb;
        border: #0c0c0c 2px solid;
        text-decoration: none;
        color: black;
    }

    @media screen and (max-width: 700px) {
        .page-block {
            display: block;
        }
    }
</style>
