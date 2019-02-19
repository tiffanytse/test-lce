---
path: '/example/vendor-link-list'
title: Vendor link list
desc: A vendor is usually the manufacturer, wholesaler, or creator of a product. This example creates a list of all the vendors for a store. Each vendor name links to a collection page that is filtered to show products by that particular vendor.
category: collections
tags: [ "vendor-page", "collections"]
date: 2018-12-05
---

1.  Place the following code where you would like the link list to appear, such as a content page, on a blog sidebar, or on a collection page.

```liquid
<ul>
  {%- for product_vendor in shop.vendors -%}
    <li>{{ product_vendor | link_to_vendor }}</li>
  {%- endfor -%}
</ul>
```
