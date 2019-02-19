---
path: '/example/product-variant-images'
title: Product variant images
desc: >
  [Deep-linking](https://www.shopify.com/partners/blog/product-variants) can be used to pre-select a specific variant on a product page. In order to load the image of a deep-linked product, the `product.selected_or_first_available_variant.featured_image` Liquid attribute must be referenced. This code example shows how this object can be used on a product page. This example demonstrates how this object can be used on a product page.
category: products
tags: ["products", "product-variants"]
date: 2018-12-05
---

1.  Add the code below where you would like to output a product's featured image on a product page.
2.  The default filter is used to select the product's `featured_image` if a variant image does not exist.

```liquid
{%- assign featured_image = product.selected_or_first_available_variant.featured_image | default: product.featured_image -%}

<a href="{{ featured_image | img_url: '1024x' }}">
  <img src="{{ featured_image | img_url: '1024x' }}" alt="{{ featured_image.alt | escape }}">
</a>
```
