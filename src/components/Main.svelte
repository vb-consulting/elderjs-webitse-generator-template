<script>
    export let fluild = false;
</script>

<main class="flex-shrink-0">
    <div class="container{fluild ? "-fluid" : ""}">
        <slot></slot>
    </div>
</main>

<style lang="scss">
    main {
        & > .container {
            padding: 15px 0px 0;
        }
    }
</style>