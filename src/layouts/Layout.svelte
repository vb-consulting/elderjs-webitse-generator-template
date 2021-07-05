<script>
  import "../../assets/style.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  export let templateHtml;
</script>

<Header />

<main class="flex-shrink-0">
  <div class="container">
    {@html templateHtml}
  </div>
</main>

<Footer />
