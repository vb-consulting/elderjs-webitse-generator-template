<script>
    export let year = new Date().getFullYear();
    export let links = [
        {href: "/pricing", title: "Pricing"},
        {href: "/blog/getting-started", title: "Blog"},
        {href: "/faq", title: "FAQ"}
    ];
</script>

<footer class="footer mt-auto py-3 bg-light text-muted">
    <div class="container py-5">
        <div class="row justify-content-lg-center">
            {#each links as link}
            <div class="col-lg-auto">
                <a class="{link.classes}" href="{link.href}">{link.title}</a>
            </div>
            {/each}
        </div>

        <div class="row justify-content-lg-center">
            <div class="col-lg-auto">
                &copy; {year}
            </div>
        </div>
    
    </div>
</footer>

<style lang="scss">
    footer {
        opacity: 0.5;
        & .row {
            margin-bottom: 10px;
        }
    }
</style>