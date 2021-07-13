<script>
</script>

<main class="flex-shrink-0">
    <div class="container">
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