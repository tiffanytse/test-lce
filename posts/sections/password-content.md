---
path: '/example/password-content'
title: Password content
desc: This section allows merchants to customize the content that appears on the password page. More info can be found on the [Shopify Web Design and Development Blog.](https://www.shopify.com/partners/blog/customize-shopify-password-pages-with-the-password-liquid-template).
category: sections
tags: ["password", "sections"]
date: 2018-12-05
---

1.  Create a new file within the `sections` folder of your theme, and paste the code below into this file. Save file as `password-content.liquid`.
2.  Where `<!--  code for newsletter form -->` appears, add your code for a newsletter sign-up form.
3.  When the password page is enabled, you can navigate to the [theme editor](https://help.shopify.com/en/themes/development/theme-editor) and select **"Password page"** on the page selector drop-down. Heading, subheading, and placeholder text can be edited on this page.

```liquid
{%- unless shop.password_message == blank -%}
  {{ shop.password_message }}
{%- endunless -%}

{%- if section.settings.newsletter_enable -%}
  {%- form 'customer', id: 'ContactPassword' -%}
     <h2>{{ section.settings.newsletter_form_heading | escape }}</h2>

     {%- if section.settings.newsletter_form_subheading != blank -%}
       <p>{{ section.settings.newsletter_form_subheading }}</p>
     {%- endif -%}

     <!-- Code for newsletter form -->

  {%- endform -%}
{%- endif -%}

{% schema %}
{
  "name": "Content",
  "settings": [
    {
      "type": "checkbox",
      "id": "newsletter_enable",
      "label": "Newsletter Signup zeigen",
      "default": true
    },
    {
      "type": "text",
      "id": "newsletter_form_heading",
      "label": "Newsletter form heading",
      "default": "Be the first to know when we launch."
    },
    {
      "type": "richtext",
      "id": "newsletter_form_subheading",
      "label": "Subheading",
      "default": "<p>A short sentence describing what someone will receive by subscribing</p>"
    },
    {
      "type": "text",
      "id": "newsletter_placeholder",
      "label": "Newsletter placeholder text",
      "default": "Email address"
    },
    {
      "type": "text",
      "id": "newsletter_button_text",
      "label": "Newsletter button text",
      "default": "Notify me"
    }
  ]
}
{% endschema %}
```
