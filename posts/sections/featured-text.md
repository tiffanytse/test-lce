---
path: '/example/featured-text'
title: Featured text
desc: This dynamic section will create an option for featured text on a store's homepage. This allows merchants to add their own custom content or messaging in any position on the page.
category: sections
tags: ["text", "homepage", "sections"]
date: 2018-12-05
---

1.  Create a new file within the `sections` folder of your theme, and paste the code below into this file. Name file `featured-text.liquid`.
2.  Navigate to the [theme editor](https://help.shopify.com/en/themes/development/theme-editor) and select **"Add section"**. Within the Text category, there will be an option for **"Rich Text"**. Custom content can be added here.

```liquid
<h2>{{ section.settings.section_title | escape }}</h2>
{{ section.settings.text }}

{% schema %}
{
  "name": "Rich text",
  "settings": [
    {
      "type": "text",
      "id": "section_title",
      "label": "Title",
      "default": "Talk about your brand"
    },
    {
      "type": "richtext",
      "id": "text",
      "label": "Text",
      "default": "<p>Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.</p>"
    }
  ],
  "presets": [
    {
      "name": "Rich Text",
      "category": "Text"
    }
  ]
}
{% endschema %}
```
