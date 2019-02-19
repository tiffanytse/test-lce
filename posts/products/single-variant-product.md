---
path: '/example/single-variant-product'
title: Single variant product
desc: The product page is a detailed page for an individual product. It includes information such as the product title, description, price, vendor, variants, and images, along with a dynamic checkout button, and an add to cart button. This product page is for single variant products.
category: products
tags: ["products", "page", "images"]
date: 2018-12-05
---

1.  Place the following code in the `product-template.liquid` file. If this file doesn't exist, then create a new file in the `sections` folder and name it `product-template`.
2.  Ensure that the `product.liquid` file includes the following Liquid tag: `{% section 'product-template' %}`.

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
</style>

<h2>{{ product.title }}</h2>

<dl>
  <dt><span class="visuallyhidden">Regular price</span></dt>
  <dd>{{ product.price | money }}</dd>

  {%- if product.vendor -%}
    <dt><span class="visuallyhidden">Vendor</span></dt>
    <dd>{{ product.vendor }}</dd>
  {%- endif -%}

</dl>

<p>{{ product.description }}</p>

{%- assign featured_image = product.featured_image -%}
<img src="{{ featured_image | img_url: '1024x'}}" alt="{{ featured_image.alt | escape }}">

{% form 'product', product %}
<select name="id">
  {%- for variant in product.variants -%}
    <option selected="selected" value="{{ variant.id }}"></option>
  {%- endfor -%}
</select>

<button type="submit" {% unless product.available %} disabled="disabled"{% endunless %}>
  {%- if product.available -%}
    Add to Cart
  {%- else -%}
    Sold Out
  {%- endif -%}
</button>
{{ form | payment_button }}
{% endform %}
```
