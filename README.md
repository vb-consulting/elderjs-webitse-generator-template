# Elder.JS Website Generator Template

This is a fork of [Elder.JS Template Project](https://github.com/Elderjs/template) that includes the following setup:

- Elder.JS
- Svelte
- Bootstrap 5
- SCSS
- SEO Check Plugin
- Blog Engine from Markdown Plugin
- Prism.JS Syntax Highlighter for the Blog Engine Plugin (with line numbers plugin)

[Elder.JS](https://elderguide.com/tech/elderjs/) is an 'SEO-First' Svelte-Based Framework. Opinionated static site generator and web framework built with SEO in mind. (Supports SSR and Static Site Generation.)

Features:

- A Highly Optimized Build Process.
- Svelte Everywhere
- 0KB JS: Defaults to 0KB of JS if your page doesn't need JS.

Learn more about Elder.JS [here](https://elderguide.com/tech/elderjs/)

## Installation

### From the command-line

```
$ npx degit vb-consulting/elderjs-website-generator-template
> cloned vb-consulting/elderjs-website-generator-template#HEAD
$ cd elderjs-website-generator-template
$ npm install
...
```

Note: 
> `degit` just simply downloads and unzips the latest version of a git repo's contents without repository initialization (unlike `git clone` for example).

### From the GitHub

Just click on the big green button **Use This Template**.

## Running in dev mode

```
$ npm start
```

Command will watch for changes and refresh page accordingly.

## Building for a production

```
$ npm run build
```

Command will output your static pages into `public` dir.

