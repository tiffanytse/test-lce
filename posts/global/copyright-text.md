---
path: '/example/copyright-text'
title: Copyright text
desc: Copyright text is typically displayed in the footer section of an online store, and provides a clear indication of a copyright symbol, the year of creation and author of the content. This example includes the copyright symbol, the current year, your store name, and a "Powered by Shopify" link.
category: global
tags: ["copyright", "footer", "global"]
date: 2018-10-05
---

1.  Add the following code into your `footer.liquid` section, or wherever you wish the copyright to appear.

```liquid
<p>&copy; {{ 'now' | date: '%Y' }}, {{ shop.name | link_to: '/' }}</p>
<p>{{ powered_by_link }}</p>
```
