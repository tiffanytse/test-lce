---
path: '/example/product-limit'
title: Product limit
desc: A product limit sets a limit on the number of products rendered on a single page. This example demonstrates how to limit the number of products that show per collection page. Learn more about product limits in the [Shopify Help Center](https://help.shopify.com/en/themes/customization/collections/show-more-products-on-collection-pages).
category: collections
tags: [ "product-limit", "pagination", "collections"]
date: 2018-12-05
---

1.  Place the paginate tags around a `forloop`, that loops through products within a collection.
2.  Replace `limit` with the number of products you wish to show per page on the collection.

```liquid
{% paginate collection.products by limit %}
  <-- Product 'forloop' content goes here -->
{% endpaginate %}
```
