---
path: '/example/product-metafields'
title: Product metafields
desc: Product metafields store and display additional product information that doesn't otherwise exist in the Shopify Admin. This example demonstrates how to add washing instructions to your products and display them on the product page. See more examples of how to use product metafields in the [Shopify Help Center](https://help.shopify.com/en/themes/liquid/objects/metafield).
category: products
tags: ["products", "metafields"]
date: 2018-12-05
---

1.  Install a [Metafields app from the Shopfiy App Store](https://apps.shopify.com/search?q=metafield).
2.  Create a new metafield. For the namespace, enter `instructions`, for the key enter `wash`, and for the value enter `Cold water`.
3.  Create another metafield. For the namespace enter `instructions`, for the key enter `dry` and for the value enter `Tumble dry`.
4.  Add the following code to either your `product.liquid` template file, or a `product-template.liquid` section file.

```liquid
{%- if product.metafields.instructions != blank -%}
  <ul>
    {%- for field in product.metafields.instructions -%}
      <li>{{ field | first }}: {{ field | last }}</li>
    {%- endfor -%}
  </ul>
{%- endif -%}
```
