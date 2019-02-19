---
path: '/example/404-page'
title: 404 page
desc: A 404 page appears when a website is active, but the specific page being requested within it doesn’t exist. This example demonstrates the markup required to output a “page not found” message, and includes a search field to help a customer find what they might be looking for.
category: global
tags: ["error", "404", "page", "global"]
date: 2018-12-05
---

1.  Place the following code in the `Templates/404.liquid` file.

```liquid
<section>
  <h2>Page not found</h2>
  <p>The page you requested is not here. If you feel like this is incorrect, you can drop us a <a href="/pages/help/">note</a>, or head back to the <a href="{{ shop.url }}">storefront</a>.</p>
  <form action="{{ shop.url }}/search" method="get" accept-charset="utf-8" role="search">
    <label for="q">Search</label>
    <input type="search" id="q" name="q" />
    <button>Search</button>
  </form>
</section>
```
