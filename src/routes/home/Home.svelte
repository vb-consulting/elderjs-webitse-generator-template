<script>
</script>

<style lang="scss">
    @import "../styles/colors.scss";

    h1 {
        color: $primary;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    p {
        color: $info;
        & > a {
            color: $secondary;
        }
    }
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
  <meta name="description" content="Elder.js Starter Template: It's A Tutorial Too!" />
  <link href="/" rel="canonical" />
</svelte:head>

<div class="text-center">
    
    <h1 class="display-4">
        Elder.js Template: Home
    </h1>

    <p>
        Learn about <a href="https://github.com/Elderjs/elderjs">Elder.js</a>.
    </p>
    <p>
        Learn about <a href="https://svelte.dev/">Svelte</a>.
    </p>
    <p>
        Check out awesome <a href="https://svelte.dev/tutorial/basics">svelte tutorial</a>.
    </p>
    <p>
        See also <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">bootstrap documentation</a>.
    </p>
    <p>
        And, for better and easier css, you might also want to catch up on <a href="https://sass-lang.com/guide">scss and sass language</a>.
    </p>
</div>
