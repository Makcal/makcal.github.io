<script lang="ts">
    export let description: string;
</script>

<li id="root">
  <slot/>
  {#if description !== undefined}
    <ul>
      <li>
        {description}
      </li>
    </ul>
  {/if}
</li>

<style>
    #root {
        font-size: 1.3rem;
        font-family: "Montserrat", sans-serif;
        padding: 0.5em 0;
    }

    ul {
        margin-left: 1em;
    }
</style>
