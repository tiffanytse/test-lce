---
path: '/example/collection-list'
title: Collection list
desc: A collection list is a page that displays all the collections in a store. In this example, a featured image for the collection is displayed, as well as the collection name.
category: collections
tags: ["collection-list", "collections"]
date: 2018-12-05
---

1.  Place the following code in the `list-collections.liquid` file. If this file doesn't exist, create one in the `Templates` directory of your theme.

```liquid
<h1>{{ page_title }}</h1>

<ul>
  {%- for collection in collections -%}
    <li>
      <!--
        These control flow tags check to see if there is a featured image for a collection.
        If there isn't one, then we assign the image from the first product in the collection.
      -->
      {%- if collection.image -%}
        {%- assign collection_image = collection.image -%}
      {%- elsif collection.products.first and collection.products.first.images != empty -%}
        {%- assign collection_image = collection.products.first.featured_image -%}
      {%- else -%}
        {%- assign collection_image = blank -%}
      {%- endif -%}

      <a href="{{ collection.url }}">
        <img src="{{ collection_image | img_url: '480x' }}" alt="">
        {{ collection.title }}
      </a>
    </li>
  {%- endfor -%}
</ul>
```
