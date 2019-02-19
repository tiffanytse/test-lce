---
path: '/example/recommended-products-by-collection'
title: Recommended products by collection
desc: A recommended products section helps to drive conversions by making it easy for customers to continue shopping. Recommended products are often displayed at the bottom of the product page. This example features products within the same collection.
category: products
tags: ["products", "recommended-products"]
date: 2018-12-05
---

1.  Add a new section in the `sections` directory and name it `recommended-products`. Paste the code below in the new file.
2.  Locate the `product.liquid` template and add the following Liquid tag where you would like the recommended products to appear: `{% section 'recommended-products' %}`

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

{%- assign number_of_products = section.settings.number_of_products -%}
{%- assign number_of_products_to_fetch = number_of_products | plus: 1 -%}

{%- if collection == null or collection.handle == 'frontpage' or collection.handle == 'all' -%}
  {%- assign found_a_collection = false -%}
  {%- for c in product.collections -%}

    {%- if found_a_collection == false and c.handle != 'frontpage' and c.handle != 'all' and c.all_products_count > 1 -%}
      {%- assign found_a_collection = true -%}
      {%- assign collection = c -%}
    {%- endif -%}

  {%- endfor -%}
{%- endif -%}

{%- if collection and collection.products_count > 1 -%}
  <h2>{{ section.settings.heading }}</h2>

  <ul>
    {%- assign current_product = product -%}
    {%- assign current_product_found = false -%}
    {%- for product in collection.products limit: number_of_products_to_fetch -%}

      {%- if product.handle == current_product.handle -%}
        {%- assign current_product_found = true -%}
      {%- else -%}
        {%- unless current_product_found == false and forloop.last -%}
          <li>
            <a href="{{ product.url | within: collection }}" class="product-card">
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
        {%- endunless -%}
      {%- endif -%}

    {%- endfor -%}
  </ul>
{%- endif -%}

{% schema %}
{
  "name": "Recommended products",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Recommended products"
    },
    {
      "type": "select",
      "id": "number_of_products",
      "label": "Number of products to show",
      "default": "4",
      "options": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "12",
          "label": "12"
        }
      ]
    }
  ]
}
{% endschema %}
```
