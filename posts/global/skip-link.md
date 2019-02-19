---
path: '/example/skip-link'
title: Skip link
desc: Skip links, also known as skip navigation links, are intended to make it easier for users navigating with a keyboard to skip over the main navigation and header elements of a site. It can be frustrating for users to have to repeatedly tab through navigation links to get to the main content of a page. Skip links solve this problem.
category: global
tags: ["skip-link", "a11y", "global"]
date: 2018-10-05
---

1.  Add the following link theme.liquid file, as the first child element inside the opening `<body>` tag. The href value should link to the id placed on the `<main>` content element.
2.  Skip links should always render before the navigation, logo, and main header elements of a site, as their purpose is to help sighted, keyboard-only users and screen reader users to skip to the main content quickly.

```liquid
<style>
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  .visuallyhidden.focusable:active,
  .visuallyhidden.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
    white-space: inherit;
  }

  .skip-link {
    background-color: #fff;
    padding: 1em;
    z-index: 10000;
  }
</style>

<a class="visuallyhidden focusable skip-link" href="#main-content">Skip to content</a>

<!-- header / site navigation -->

<main id="main-content" role="main" tabindex="-1">
  {{ content_for_layout }}
</main>
```
