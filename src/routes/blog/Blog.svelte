<script>
    import Bootstrap from "../../components/Bootstrap.svelte";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import Main from "../../components/Main.svelte";
    export let data, request; // data is mainly being populated from the @elderjs/plugin-markdown
    const { html, frontmatter } = data;
</script>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href={request.permalink} rel="canonical" />
</svelte:head>

<Bootstrap />
<Header />

<Main>
  <div class="title">
    <h1>{frontmatter.title}</h1>
    {#if frontmatter.author}<small>By {frontmatter.author}</small>{/if}
  </div>

  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</Main>

<Footer />