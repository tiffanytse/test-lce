---
path: '/example/pagination-simple'
title: Pagination simple
desc: Pagination is an ordered numbering of pages usually located at the top or bottom of a webpage. It enables users to navigate through a series of pages where content has been split up for design purposes, usability, faster loading, an so on. Note, this simplified example does not output a fully accessible pagination. For an accessible pagination, see the next Pagination example.
category: navigation
tags: ["navigation", "collection", "products", "pagination"]
date: 2018-12-05
---

1.  Place the following code where you wish pagination to display. This code must appear within `paginate` tags for the following example to work. Within the `paginate` tags, you can access the [paginate](https://help.shopify.com/en/themes/liquid/objects/paginate) object.
2.  Specify the type of content you want to paginate, and at what limit you wish to paginate by, for example `{% paginate collection.products by 12 %}`.
3.  Override the`| default_pagination` filter `Next »` and `« Previous` labels by passing a new label to the `next` and `previous` options.

```liquid
{%- paginate blog.articles by 5 -%}
  {%- for product in collection.products -%}
    <!-- show product details here -->
  {%- endfor -%}

  {{ paginate | default_pagination: next: 'Older', previous: 'Newer' }}
{%- endpaginate -%}
```
