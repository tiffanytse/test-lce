---
path: '/example/homepage-quotes'
title: Homepage quotes
desc: This section allows merchants to display quotes or testimonials from previous customers on their home-page. Quotes or testimonials are important because they allow merchants to build trust with customers by displaying positive messages from previous customers or brand supporters. This dynamic section makes use of section blocks to add multiple quotes, up to a maximum of 8.
category: sections
tags: ["text", "blocks", "sections"]
date: 2018-12-05
---

1.  Create a new file within the `sections` folder of your theme, and paste the code below into this file. Save file as `quotes.liquid`.
2.  Add your own required styling for the quotes to the `theme.scss.liquid` file and include SVG quote icon if needed.
3.  Navigate to the [theme editor](https://help.shopify.com/en/themes/development/theme-editor) and select **"Add section"**. Within the "Text" category there will be an option for "Quotes". A maximum of 8 image blocks with links can be added.

```liquid
<h2>{{ section.settings.title }}</h2>

{%- if section.blocks.size > 0 -%}
  {%- for block in section.blocks -%}
    <blockquote>
      {%- if block.settings.quote != blank -%}
        <p>
          {{ block.settings.quote }}
        </p>
      {%- endif -%}
    </blockquote>

    {%- if block.settings.author != blank -%}
      <cite>
        <a href="{{ block.settings.link }}">
          {{ block.settings.author }}
        </a>
      </cite>
    {%- endif -%}
  {%- endfor -%}
{%- endif -%}

{% schema %}
{
  "name": "Testimonials",
  "class": "index-section",
  "max_blocks": 8,
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Heading",
      "default": "Testimonials"
    }
  ],
  "blocks": [
    {
      "type": "quote",
      "name": "Testimonial",
      "settings": [
        {
          "type": "richtext",
          "id": "quote",
          "label": "Text",
          "default": "<p>Add customer reviews and testimonials to showcase your store’s happy customers.</p>"
        },
        {
          "type": "text",
          "id": "author",
          "label": "Author",
          "default": "Author’s name"
        },
        {
    "type": "url",
          "id": "link",
          "label": "link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Testimonials",
      "category": "Text",
      "blocks": [
        {
          "type": "quote"
        },
        {
          "type": "quote"
        },
        {
          "type": "quote"
        }
      ]
    }
  ]
}
{% endschema %}
```
