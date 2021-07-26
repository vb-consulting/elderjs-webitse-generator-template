const extract = require("remark-extract-frontmatter");
const frontmatter = require("remark-frontmatter");
const compiler = require("remark-stringify");
const parser = require("remark-parse");
const unified = require("unified");
const yaml = require('yaml').parse;
const fs = require("fs");

const blogDir = "./src/routes/blog/";

function parseFrontmatter(content) {
  return new Promise((resolve, reject) => {
    unified().use(parser).use(compiler).use(frontmatter, [ "yaml" ]).use(extract, { name: "frontmatter", yaml: yaml })
    .process(content, (err, file) => {
      resolve(file.data.frontmatter)
    })
  });
}

async function getBlogsData() {
    let result = [];
    for(var file of fs.readdirSync(blogDir)) {
      if (!file.toLowerCase().endsWith(".md")) {
        continue;
      }
      let full = blogDir + file;
      let data = await parseFrontmatter(fs.readFileSync(full));
      if (!data) {
        continue;
      }
      data.url = "/blog/" + file.toLowerCase().replace(".md", "").replace(/ /g, "-") + "/";
      let date;
      let parsed = Date.parse(data.date);
      if (!isNaN(parsed)) {
        date = new Date(parsed);
      } else {
        if (!data.date) {
          try {
              let stats = fs.statSync(full);
              date = stats.mtime;
          } catch {
            date = new Date();
          }
        }
      }
      if (date) {
        data.time = date.getTime();
      }
      result.push(data);
    }
    result.sort((a,b) => (a.time > b.time || !a.time) ? -1 : ((b.time > a.time) ? 1 : 0));
    return result;
}

module.exports = {
  data: async ({ request }) => {
      return {
        blogs: await getBlogsData(),
        timeAgo: true,
        bootstrapTooltips: true
      }
    },
  all: () => [{ slug: '/' }],
  permalink: "/blogs/",
};
