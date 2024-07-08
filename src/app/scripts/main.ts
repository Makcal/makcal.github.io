// const animated_parts = ["#photo-part", "#about-part", "#project-list-part", "#top-project-part"];
const animated_parts = [...document.querySelectorAll(".appear_anim")].map(e => '#' + e.id);
const delay_step = 0.5;
const animation_duration = 1;

for (let i = 1; i <= animated_parts.length; i++) {
    let selector = animated_parts[i-1];
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
