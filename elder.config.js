require("dotenv").config();
const remarkFrontmatter = require("remark-frontmatter");
const extractFrontmatter = require("remark-extract-frontmatter");
const yaml = require("yaml").parse;
const remarkHtml = require("remark-html");
const remarkSlug = require("remark-slug");
const gfm = require("remark-gfm");
const footnotes = require("remark-footnotes")

module.exports = {
  origin: "", // TODO: update this.
  lang: "en",
  srcDir: "src",
  distDir: "public",
  rootDir: process.cwd(),
  build: {},
  prefix: "", // If you want your site to be built within a sub folder within your `distDir` you can use this.
  server: {},
  props: {
    hydration: "hybrid",
    compress: false,
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
    automagic: false,
  },
  hooks: {
    // disable: ["elderWriteHtmlFileToPublic"], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
    disable: ["elderCompileHtml"],
  },
  plugins: {
    "@elderjs/plugin-markdown": {
      routes: ["blog"],

      useSyntaxHighlighting: false,
      //useSyntaxHighlighting: {
        //theme: "material-theme-darker"
        //theme: "nord" // available themes: https://github.com/shikijs/shiki/blob/master/packages/themes/README.md#literal-values - try material-theme-darker
        // theme is the only option available - for now.
      //},
      useTableOfContents: true,

      remarkPlugins: [
        remarkFrontmatter,
        [extractFrontmatter, { name: "frontmatter", yaml: yaml }],
        remarkSlug,
        remarkHtml,
        gfm,
        [footnotes, {inlineNotes: true}]
      ]
    },
    "@elderjs/plugin-browser-reload": {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
      reload: false, // if you are having issues with reloading not working, change to true.
    },
    "@elderjs/plugin-seo-check": {
      display: ["errors", "warnings"], // If the errors are too verbose remove "warnings"
      //writeLocation: "./report.json", // if you want to write a report of errors
    },
  },
  shortcodes: { closePattern: "}}", openPattern: "{{" },
};
