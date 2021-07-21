<script>
    export let tooltips = false;
    if (process.env.componentType === "browser") {
        if (tooltips) {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {return new bootstrap.Tooltip(e)});
        }
    }
</script>

<svelte:head>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<script>window.bootstrap || document.write('<script src="bootstrap.bundle.min.js">\x3C/script>');</script>
</svelte:head>
