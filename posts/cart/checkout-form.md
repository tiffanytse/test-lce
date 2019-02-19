---
path: '/example/checkout-form'
title: Checkout form
desc: The checkout form is what customers use to review their cart, remove any unwanted products, and proceed to checkout.
category: cart
tags: ["cart", "checkout", "form"]
date: 2018-12-05
---

1.  Place the following code in the `cart.liquid` template file. If this file doesn't exist, then create a new file in the template folder and name it `cart.liquid`.

```liquid
{%- if cart.item_count > 0 -%}

<form action="/cart" method="post">

  {%- for item in cart.items -%}
    <a href="{{ item.url | within: collections.all }}">
      <img src="{{ item | img_url: '200x200' }}" alt="{{ item.image.alt | escape }}">
      {{ item.product.title }}
    </a>

    {%- unless item.variant.title contains 'Default' -%}
      <p>{{ item.variant.title }}</p>
    {%- endunless -%}

    {%- assign property_size = item.properties | size -%}
    {%- if property_size > 0 -%}
      <ul>

        {%- for p in item.properties -%}
          {%- assign first_character_in_key = p.first | truncate: 1, '' -%}
          {%- unless p.last == blank or first_character_in_key == '_' -%}
            <li>
              {{ p.first }}:

              {%- if p.last contains '/uploads/' -%}
                <a href="{{ p.last }}">{{ p.last | split: '/' | last }}</a>
              {%- else -%}
                {{ p.last }}
              {%- endif -%}

            </li>
          {%- endunless -%}
        {%- endfor -%}

      </ul>
    {%- endif -%}

    <p>
      <a aria-label="Remove {{ item.variant.title }}" href="/cart/change?line={{ forloop.index }}&amp;quantity=0">Remove</a>
    </p>
  {%- endfor -%}

  <input type="submit" name="checkout" value="Checkout">
</form>

{%- else -%}
  <p>The cart is empty. <a href="/collections/all">Continue shopping</a></p>
{%- endif -%}
```
