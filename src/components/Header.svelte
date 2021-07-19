<script>
    export let fixed = true;
    export let title = process.env.TITLE || "MyWebSite";;
    export let fluid = false;
    export let links = [
        {href: "/pricing/", title: "Pricing"},
        {href: "/blogs/", title: "Blogs"},
        {href: "/faq/", title: "FAQ"}
    ];
    export let url = "";
</script>

<header>
    <nav class="navbar navbar-expand-md {fixed ? "fixed-top" : ""} navbar-dark bg-primary">
        <div class="container{fluid ? "-fluid" : ""}">
            <a class="navbar-brand" href="/">{title}</a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    {#each links as link}
                    <li class="nav-item">
                        <a class="nav-link {url == link.href ? "active" : ""} {link.classes ? link.classes : ""}" href="{link.href}">{link.title}</a>
                    </li>
                    {/each}
                </ul>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light">Search</button>
                </div>
            </div>
        </div>
    </nav>
</header>

<style lang="scss">
    @import "../../styles/colors.scss";
    
    .navbar-toggler:focus {
        text-decoration: initial; 
        outline: initial;
        box-shadow: initial;
    }
    .navbar-toggler:not(.collapsed) {
        background-color: $toggler-expanded;
    }
</style>