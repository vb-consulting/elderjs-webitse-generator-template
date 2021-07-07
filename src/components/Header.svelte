<script>
    const title = "Home";
    const fixed = false;
    const fluid = false;
    const dark = true;
    const links = [
        {href: "/pricing", title: "Pricing"},
        {href: "/blog/getting-started", title: "Blog"},
        {href: "/faq", title: "FAQ"}
    ];
</script>

<header>
    <nav class="navbar navbar-expand-md navbar-light {fixed ? "fixed-top" : ""} {dark ? "bg-dark navbar-dark" : "bg-light navbar-light"}">
        <div class="container{fluid ? "-fluid" : ""}">
            <a class="navbar-brand" href="/">{title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    {#each links as link}
                    <li class="nav-item">
                        <a class="nav-link {link.classes}" href="{link.href}">{link.title}</a>
                    </li>
                    {/each}
                </ul>
                <div class="d-flex">
                    <a class="btn btn-outline-success" href="/login">Login</a>
                </div>
            </div>
        </div>
    </nav>
</header>

<style lang="scss">
    @import "../../styles/colors.scss";
    a.btn {
        color: $light;
    }
</style>