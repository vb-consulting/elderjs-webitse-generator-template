---
title: Instructions How To Blog
description: Instructions for the blogging engine and how to use it
author: VB
---

## Create a new blog

Inside dir `src/routes/blog` - create a new file in  with extension `md`. For example `my-blog.md`.

Add the following minimal header to top of the file:

```
---
title: Blog title
---

[blog content goes here]
```

After saving this file, new web page will be create on location `https://mysite.com/my-blog/`. Name of the created page `my-blog` is derived from the file name (see above). 

Also, new blog is enlisted on page `https://mysite.com/blogs/`.

## Blog header format

Each blog has to have header at the top with basic information. Blog without header won't be published. 

General format of the header is:

```
---
property1: value1
property2: value2
---

[blog content goes here]
```

Each file save triggers a site build and if this header is incorrect format, site build might failed.

Where properties can be either one of these values:

- `title`
- `description`
- `small`
- `author`
- `date`
- `tags`
- `showTags`

### title

Title is the title of the blog.

Text that appears as heading 1 on top of the blog (H1 element). H1 element is parsed by search engines and thus H1 should be avoided further inside blog (see formating bellow).

It also appears as heading text in list of blogs page `/blogs/`.

This is only property that is required. Minimal header includes only this property as in example above.

### description

Value of this property, if present will appear as a description in list of blogs page `/blogs/` and more importantly as description meta tag inside page which is visible to search engines, like this `<meta name="description" content="your description here" />`.

If not present, description won't show in a list and meta tag will have title text instead.

### small

This is optional smaller subtext bellow description in the list of blogs.

### author

Optional author name. If present it will appear in the list of blogs.

### date

Optional date of the blog.

If not present, default date will be blog file last modification date.

Blog date appears in blog list page on the right side of the list in time ago format (for example: 1 minute ago, 5 days ago, 1 year ago, etc).

If you enter date manually in header, use following date format: `yyyy-mm-ddThh:min` with leading zeros. For example `2021-07-16T15:03`. Hours and minutes are optional.

If you wish to disable date in the list page, set date to invalid format, for example: `date: N/A`.

Blog list is sorted by these dates. Newest blogs go first. Before them on very top are blogs with disabled dates (`date: N/A`).

### tags

List of tags for this blog, separated by comma. For example: `tags: tag1, tag2, tag3`.

This value goes to `keywords` meta in blog page. For example `<meta name="keywords" content="tag1, tag2, tag3" />`. This is important for the search engines.

If these tags not present, default `keywords` meta for each page is `<meta name="keywords" content="TITLE Blog" />`.

### showTags

This property, if present with any value (for example `showTags: true`) - will show tags inside blog list as pill elements just bellow the author.

## Blog content

Bellow header goes content, for example:

```
---
title: Instructions How To Blog
description: Instructions for the blogging engine and how to use it
author: VB
---

Content here
```

Content uses Markdown syntax for formatting.

Markdown syntax is extremely simple and easy to remember. Here are some basic rules:

| Syntax | Description |
| ----------- | ----------- |
| `# header text 1` | header 1 (H1) |
| `## header text 2` | header 2 (H2) |
| `### header text 3` | header 3 (H3) |
| `#### header text 4` | header 4 (H4) |
| `**bold text**` | bold text |
| `*italic text*` | italic text |
| `> quoted text*` | quoted text |
| `[link text](link url)` | link |
| `![picture hint text](picture link url)` | picture |

etc, etc...

Important:
> **Don't use header 1 (`# header text 1`) because blog title is already rendered as header 1 and that might confuse search engines.**

Markdown also supports tables, lists, numbered lists, bulleted lists, footnotes, code blocks, etc.

For full syntax see following links:

- [github markdown guide](https://guides.github.com/features/mastering-markdown/)
- [cheetsheet pdf](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
- [markdownguide official](https://www.markdownguide.org/basic-syntax/)
