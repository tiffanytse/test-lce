---
path: '/example/show-product-sku'
title: Show product SKU
desc: Stock keeping units (SKUs) are used to identify products and track inventory. You can display the unique SKU for a product and its variants on the product page.
category: products
tags: ["sku", "product-variants", "products"]
date: 2018-12-05
---

1.  Add the following code to the `product-template.liquid` section, just below the product title.
2.  Depending on your theme, ensure that the SKU updates dynamically when you select other variants. If not, then you will need to add [a few lines of JavaScript](https://help.shopify.com/en/themes/customization/products/features/show-sku-numbers#show-sku-numbers-on-product-pages-sectioned-themes-specific) to your theme's JavaScript file.

```liquid
{%- assign current_variant = product.selected_or_first_available_variant -%}
<span>{{ current_variant.sku }}</span>
```
