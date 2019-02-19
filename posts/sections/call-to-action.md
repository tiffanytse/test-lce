---
path: '/example/call-to-action'
title: Call to Action
desc: Call-to-action buttons allow merchants to drive visitor engagement to specific products, or carry out a specific activity, such as creating an account or accessing content. This section will allow a [call-to-action button](https://www.shopify.com/partners/blog/building-a-clickable-call-to-action-button-for-your-shopify-theme) to be added to the home-page from the [theme editor](https://help.shopify.com/en/themes/development/theme-editor).
category: sections
tags: ["homepage", "promotional", "sections"]
date: 2018-12-05
---

1.  Create a new file within the `sections` folder of your theme, and paste the code below into this file. Save file as `call-to-action.liquid`.
2.  Navigate to the Theme Editor and select **"Add section"**. Within the Promotional category there will be an option for **"Call to Action"**. A heading, link, and link text can be assigned in this section.

```liquid
<div id="section-cta">
  <h2>{{ section.settings.text-box }}</h2>

  <a href="{{ section.settings.link }}">
    {{ section.settings.linktext }}
  </a>
</div>

{% schema %}
{
  "name": "Call to action",
  "settings": [
    {
      "id": "text-box",
      "type": "text",
      "label": "Heading",
      "default": "Title"
    },
    {
      "id": "link",
      "type": "url",
      "label": "Link URL"
    },
    {
      "id": "linktext",
      "type": "text",
      "label": "Link text",
      "default": "Click here"
    }
  ]
  ,
  "presets": [
    {
      "name": "Call to Action",
      "category": "Promotional"
    }
  ]
}
{% endschema %}
```
