---
path: '/example/collection-page'
title: Collection page
desc: The collection page lists the products within a collection. There is a limit of 50 products per page, after which pagination will automatically occur. Learn more about the collection template file in the [Shopify Help Center](https://help.shopify.com/en/themes/development/templates/collection-liquid).
category: collections
tags: ["collections", "page", "product-list"]
date: 2018-12-05
---

1.  Place the following code in the `collection.liquid` file. If this file doesn't exist, add it to the `Templates` folder.

```liquid
<style>
  .product-card {
    box-sizing: border-box;
    float: left;
    min-height: 1em;
    padding-left: 2em;
    vertical-align: top;
    width: 25%;
  }

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
</style>

<h1>{{ collection.title }}</h1>

{%- if collection.description != blank -%}
  <p>{{ collection.description }}</p>
{%- endif -%}

<ul>
  {%- for product in collection.products -%}
    <li>
      <a class="product-card" href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | img_url: '1024x' }}" alt="">
        {{ product.title }}
        <p>
          <span aria-hidden="true">—</span>
          {%- if product.price_varies -%}
            <span class="visuallyhidden">Starting at</span>
            {{ product.price_min | money_without_trailing_zeros }}
            <span aria-hidden="true">+</span>
          {%- else -%}
            {{ product.price | money_without_trailing_zeros }}
          {%- endif -%}
        </p>
        <p>
          <span class="visuallyhidden">by</span>
          {{ product.vendor }}
        </p>
      </a>
    </li>
  {%- endfor -%}
</ul>
```
