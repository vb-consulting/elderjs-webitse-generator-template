const fs = require("fs");
const rollup = require('rollup');
const terser = require("rollup-plugin-terser");

// bootstrap
fs.copyFileSync("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", "assets/bootstrap.bundle.min.js");

// prism
async function buildPrismJs() {
    const prismPlugins = ["./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js"];

    const inputOptions = {
        input: [
            "./node_modules/prismjs/prism.js"
        ],
        plugins: [
            terser.terser()
        ]
    };
    const outputOptions = {
        file: "./assets/prism.js",
        format: "esm",
    };
    const bundle = await rollup.rollup(inputOptions);
    const { output } = await bundle.generate(outputOptions);

    let content = "";
    for (const chunkOrAsset of output) {
        if (chunkOrAsset.type !== 'asset') {
            content = content + chunkOrAsset.code;
        }
    }
    
    for (const prismPlugin of prismPlugins) {
        content = content + fs.readFileSync(prismPlugin).toString();
    }
    
    console.log('Bundle: ', outputOptions.file);
    fs.writeFileSync(outputOptions.file, content, "utf8");
    await bundle.close();
}

buildPrismJs();
//buildPrismCss();
