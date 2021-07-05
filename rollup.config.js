require('dotenv').config();

const { getRollupConfig } = require('@elderjs/elderjs');
const svelteConfig = require('./svelte.config');

const config = getRollupConfig({ svelteConfig });
for (let obj of config) {
    if (obj["plugins"]) {
        for (let plugin of obj["plugins"]) {
            if (plugin.name === "replace") {
                plugin["preventAssignment"] = true;
            }
        }
    }
}

module.exports = [...config];
