---
path: '/example/previous-and-next-article-buttons'
title: Previous and next article buttons
desc: Merchants may want to add an extra layer of navigation to blog posts. Previous and next article buttons allow for an easy way to navigate to additional articles.
category: blog
tags: ["article", "pagination", "buttons", "blog"]
date: 2018-12-05
---

1.  Locate the file that contains your theme's blog article listing, and paste the code below into this file. Code can be placed in the most appropriate position (such as above the social sharing buttons).
2.  Ensure code within `schema` tags is within the existing `schema` tags for the section.
3.  By default, buttons for all articles will appear. Buttons can be enabled or disabled from the [theme editor](https://help.shopify.com/en/themes/development/theme-editor).

```liquid
{% if section.settings.blog_show_previous_and_next_buttons %}
  <ul>
    <li>
      <a href="{{ blog.previous_article }}">Previous post</a>
    </li>
    <li>
      <a href="{{ blog.next_article }}">Next post</a>
    </li>
  </ul>
{%- endif -%}

{% schema %}
{
  "name": "Blog posts",
  "settings": [
    {
      "type": "checkbox",
      "id": "blog_show_previous_and_next_buttons",
      "label": "Show next/ previous buttons",
      "default": true
    }
  ]
}
{% endschema %}
```
