<script>
    export let fluild = false;
    export let classes = "";
</script>

<main class="flex-shrink-0">
    <div class="container{fluild ? "-fluid" : ""} {classes}">
        <slot></slot>
    </div>
</main>

<style lang="scss">
    main {
        & > .container {
            padding-top: 56px;
        }
    }
</style>