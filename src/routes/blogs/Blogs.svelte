<script>
    import Bootstrap from "../../components/Bootstrap.svelte";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import Main from "../../components/Main.svelte";
    import TimeAgo from "../../components/TimeAgo.svelte";
    export let request;
    export let settings;
    export let data;

    const title = process.env.TITLE;

    let desc = [];
    let tags = [];
    for(let blog of data.blogs) {
      if (blog.title) {
        desc.push(...blog.title.split(" "));
      }
      if (blog.tags) {
        tags.push(...blog.tags.split(","));
      }
    }
    let description = desc.length ? (title + " Blog: " + Array.from(new Set(desc)).join(" ")).substring(0,154) : "Blogs";
    let keywords = tags.length ? Array.from(new Set(tags)).slice(0, 30).join(", ") : "Blog";
</script>

<svelte:head>
  <title>{title} Blogs</title>
  <meta name="description" content="{description}" />
  <meta name="keywords" content="{keywords}">
  <link href="{`${settings.origin}${request.permalink}`}" rel="canonical" />
</svelte:head>

<Bootstrap />
<TimeAgo hydrate-client={{ }} />

<Header url={request.permalink} />
<Main>
  <h1 style="display: none;">{title} Blog</h1>

  {#if data.blogs.length}
    <div class="list-group list-group-flush py-5">
    {#each data.blogs as blog}
      {#if blog.url && blog.title}
        <a href="{blog.url}" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <div class="mb-1 lead fw-bolder">{blog.title}</div>
          {#if blog.time}
            <small class="time-ago text-muted" data-time={blog.time}></small>
          {/if}
        </div>

        <p class="mb-1">
          {#if blog.description}
            <span>{blog.description}</span>
          {/if}
          {#if blog.small}
            <small class="text-muted d-block">{blog.small}</small>
          {/if}
        </p>

        {#if blog.author}
        <small class="text-muted fst-italic">By {blog.author}</small>
        {/if}
        {#if blog.tags && blog.showTags}
          <div>
            {#each blog.tags.split(",") as tag}
              <span class="badge rounded-pill bg-secondary">#{tag.trim()}</span>
            {/each}
          </div>
          {/if}
      </a>
      {/if}
    {/each}
    </div>
  {:else}
    <div class="alert alert-info my-5 fs-3" role="alert">
      No blogs yet. Come back later.
    </div>
  {/if}
</Main>
<Footer url={request.permalink} />

