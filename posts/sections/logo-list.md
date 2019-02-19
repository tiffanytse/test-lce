---
path: '/example/logo-list'
title: Logo list
desc: The Logo list allows merchants to upload images of logos to display company sponsors or brands they have worked with and websites they have been featured on. Note, this code example uses the `placeholder_svg_tag` Liquid filter to output an SVG illustration when no logo is present in a block. You can learn more about the `placeholder_svg_tag` Liquid filter in [our Shopify Help Center.](https://help.shopify.com/en/themes/liquid/filters/additional-filters#placeholder_svg_tag)
category: sections
tags: ["images", "blocks", "sections"]
date: 2018-12-05
---

1.  Create a new file within the `sections` folder of your theme, and paste the code below into this file. Save file as `logo-list.liquid`.
2.  Navigate to the [theme editor](https://help.shopify.com/en/themes/development/theme-editor) and select **"Add section"**. Within the Image category there will be an option for **"Logo list"**. A maximum of 10 image blocks with links can be added.
3.  Logo image widths can be adjusted from the theme editor. Different width parameters can be assigned to the `logo_width` settings.

```liquid
<style>
  .logo-bar__item {
    display: inline-block;
    max-width: {{ section.settings.logo_width }};
  }
</style>

<h2>{{ section.settings.title | escape }}</h2>

{%- if section.blocks.size > 0 -%}
  <ul>
    {%- for block in section.blocks -%}
      <li class="logo-bar__item" {{ block.shopify_attributes }}>
        {%- if block.settings.link != blank -%}
          <a href="{{ block.settings.link }}">
        {%- endif -%}

          {%- if block.settings.image != blank -%}
            {{ block.settings.image | img_url: '160x160', scale: 2 | img_tag: block.settings.image.alt }}
          {%- else -%}
            {{ 'logo' | placeholder_svg_tag: 'placeholder-svg' }}
          {%- endif -%}

        {%- if block.settings.link != blank -%}
          </a>
        {%- endif -%}
      </li>
    {%- endfor -%}
  </ul>
{%- endif -%}

{% schema %}
{
  "name": "Logo list",
  "class": "index-section",
  "max_blocks": 10,
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Heading",
      "default": "Logo list"
    },
    {
      "type": "select",
      "id": "logo_width",
      "label": "Logo width",
      "default": "160px",
      "options": [
        {
          "label": "Extra Small",
          "value": "100px"
        },
        {
          "label": "Small",
          "value": "125px"
        },
        {
          "label": "Medium",
          "value": "160px"
        },
        {
          "label": "Large",
          "value": "175px"
        },
        {
          "label": "Extra Large",
          "value": "200px"
        }
      ]
    }
  ],
  "blocks": [
    {
      "type": "logo_image",
      "name": "Logo",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link",
          "info": "Optional"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Logo list",
      "category": "Image",
      "blocks": [
        {
          "type": "logo_image"
        },
        {
          "type": "logo_image"
        },
        {
          "type": "logo_image"
        },
        {
          "type": "logo_image"
        }
      ]
    }
  ]
}
{% endschema %}
```
