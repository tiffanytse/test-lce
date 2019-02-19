---
path: '/example/blog-tag-list'
title: Blog tag listing
desc: Tags are a type of taxonomy, and are often used to reflect the keywords of a blog article. Tags also provide a means of navigation for customers browsing for similar blog posts. This component displays all the tags associated with a store, including the tags of articles that are not in the current pagination view.
category: blog
tags: ["tags", "page", "blog"]
date: 2018-11-28
---

1.  Locate the section file which contains your theme's blog article listing, such as `blog-template.liquid`, and paste the code below into the file.
2.  The section settings in this example can be placed inside the sections' existing schema array, if it is already present. For example, it can be placed within the section setting named `Blog pages`. In this case, the code within the `{% schema %}` tags below can be added within the existing schema settings (including a comma to separate from other settings).
3.  By default, tags for all blogs will appear. This can be disabled on the [theme editor](https://help.shopify.com/en/themes/development/theme-editor).

```liquid
<aside>
  {%- if section.settings.blog_show_tags -%}
    <ul>
      <li>
        {%- for tag in blog.all_tags -%}
          <a href="{{ blog.url }}/tagged/{{ tag | handle }}">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
        {%- endfor -%}
      </li>
    </ul>
  {%- endif -%}
</aside>

{% schema %}
{
  "name": "Blog posts",
  "settings": [
    {
      "type": "checkbox",
      "id": "blog_show_tags",
      "label": "Show tags",
      "default": true
    }
  ]
}
{% endschema %}
```
