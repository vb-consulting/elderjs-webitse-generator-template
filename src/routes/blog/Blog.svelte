<script>
  import Bootstrap from "../../components/Bootstrap.svelte";
  import Prism from "../../components/Prism.svelte";
  import Header from "../../components/Header.svelte";
  import Footer from "../../components/Footer.svelte";
  import Main from "../../components/Main.svelte";
  export let data;
  export let request; 
  export let settings;
  let { html, frontmatter } = data;
  html = html.replace("<table>", "<table class=\"table\">");
</script>

<svelte:head>
<title>{frontmatter.title}</title>
<meta name="description" content={frontmatter.description ? frontmatter.description : frontmatter.title} />
{#if frontmatter.tags}
<meta name="keywords" content="{frontmatter.tags}">
{:else}
<meta name="keywords" content="Blog">
{/if}
<link href="{`${settings.origin}${request.permalink}`}" rel="canonical" />
</svelte:head>

<Bootstrap />
<Prism />
<Header url={request.permalink} />

<Main classes={"my-4"}>

<h1>{frontmatter.title}</h1>
<div class="line-numbers">
  {@html html}
</div>

</Main>

<Footer />
