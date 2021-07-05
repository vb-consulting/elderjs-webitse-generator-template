const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const hooks = [
  {
    hook: 'bootstrap',
    name: 'copyAssetsToPublic',
    description:
      'Copies ./assets/ to the "distDir" defined in the elder.config.js. This function helps support the live reload process.',
    run: ({ settings }) => {
      // note that this function doesn't manipulate any props or return anything.
      // It is just executed on the 'bootstrap' hook which runs once when Elder.js is starting.

      // copy assets folder to public destination
      glob.sync(path.resolve(settings.rootDir, './assets/**/*')).forEach((file) => {
        const parsed = path.parse(file);
        // Only write the file/folder structure if it has an extension
        if (parsed.ext && parsed.ext.length > 0) {
          const relativeToAssetsFolder = path.relative(path.join(settings.rootDir, './assets'), file);
          const outputPath = path.resolve(settings.distDir, relativeToAssetsFolder);
          fs.ensureDirSync(path.parse(outputPath).dir);
          fs.outputFileSync(outputPath, fs.readFileSync(file));
        }
      });
    },
  },

  {
    hook: 'compileHtml',
    name: 'myCompileHtml',
    description: 'Creates an HTML string out of the Svelte layout and stacks.',
    priority: 50,
    run: async ({ settings, htmlAttributesString, bodyAttributesString, headString, footerString, layoutHtml }) => {
      const htmlAttString =
        htmlAttributesString && htmlAttributesString.length > 0 ? htmlAttributesString : `lang="${settings.lang}"`;
      const bodyAttString =
        bodyAttributesString && bodyAttributesString.length > 0
          ? bodyAttributesString
          : `class="d-flex flex-column h-100"`;
      return {
        htmlString: `<!DOCTYPE html><html ${htmlAttString}><head>${headString}</head><body ${bodyAttString}>${layoutHtml}${footerString}</body></html>`,
      };
    },
  },
];
module.exports = hooks;
