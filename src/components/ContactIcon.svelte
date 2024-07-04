<script lang="ts">
    export let url: string;
    export let icon: string;
    export let alt: string;
</script>

<a id="tg-link" class="no_underline" href={url} target="_blank">
    <img class="contact-icon hover_flying" src={icon} alt={alt}>
</a>

<style>
    .hover_flying {
        transition: translate 0.5s;
    }

    .hover_flying:hover {
        translate: 0 -0.25em;
    }

    .contact-icon {
        padding: 0 0.25em;
        height: 2em;
        user-select: none;
    }
</style>
