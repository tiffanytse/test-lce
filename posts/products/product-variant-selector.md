---
path: '/example/product-variant-selector'
title: Product variant selector
desc: The product variant selector is the HTML control which a user would interact with in order to select a product variant. Depending on the theme settings, the controls could be radio buttons or a select drop-down.
category: products
tags: ["products", "product-variants"]
date: 2018-12-05
---

1.  Place the following code in the `product-template.liquid` file, within the `{% form 'product' … %}` block. If this file doesn't exist, then click **Add a new section** and call it `product-template`.
2.  Make sure that the `product.liquid` file includes the following Liquid tag: `{% section 'product-template' %}`. Add this tag to the file if it isn't there already.

```liquid
{%- unless product.has_only_default_variant -%}
  {%- for option in product.options_with_values -%}

    {%- if section.settings.product_selector == 'radio' -%}
      <fieldset id="ProductSelect-option-{{ forloop.index0 }}" name="{{ option.name | handleize }}">
        <legend>
          {{ option.name | escape }}
        </legend>
        {%- for value in option.values -%}
          <!-- Check to see if there's a product size option. If there is a size, check to see if there's any availble for purchase. If not, set the variat control in a "disabled" state. -->
          {%- assign variant_label_state = true -%}

          {%- if product.options.size == 1 -%}
            {%- unless product.variants[forloop.index0].available -%}
              {%- assign variant_label_state = false -%}
            {%- endunless -%}
          {%- endif -%}

          <input type="radio"
            {% if option.selected_value == value %} checked="checked"{% endif %}
            {% unless variant_label_state %} disabled="disabled"{% endunless %}
            value="{{ value | escape }}"
            data-index="option{{ forloop.index }}"
            name="{{ option.name | handleize }}"
            id="ProductSelect-option-{{ option.name | handleize }}-{{ value | escape }}">
          <label for="ProductSelect-option-{{ option.name | handleize }}-{{ value | escape }}">
            {{ value | escape }}
          </label>
        {%- endfor -%}
      </fieldset>
    {%- else -%}
      <label for="ProductSelect-option-{{ forloop.index0 }}">
        {{ option.name | escape }}
      </label>
      <select id="ProductSelect-{{ forloop.index0 }}" data-index="option{{ forloop.index }}">
        {%- for value in option.values -%}
          <option value="{{ value | escape }}"{% if option.selected_value == value %} selected="selected"{% endif %}>
            {{ value | escape }}
          </option>
        {%- endfor -%}
      </select>
    {%- endif -%}

  {%- endfor -%}
{%- endunless -%}
```
