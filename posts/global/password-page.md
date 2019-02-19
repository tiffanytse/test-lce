---
path: '/example/password-page'
title: Password page
desc: The password page is a landing page that adds password protection to your online store. Password pages are also sometimes used to collect email addresses before a store opens. This page is displayed after setting a store-wide password within the store preferences section of the Shopify admin.
category: global
tags: ["password", "page", "global"]
date: 2018-10-05
---

1.  Place the following code in the `Layout/password.liquid` file.
2.  Enable store password protection by adding a password in the Shopify admin by navigating to **"Online Store"** > **"Preferences"**.

```liquid
<!doctype html>
<!--[if IE 9]> <html class="ie9 no-js" lang="{{ shop.locale }}"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class="no-js" lang="{{ shop.locale }}"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="{{ settings.color_primary }}">
  <link rel="canonical" href="{{ canonical_url }}">

  {%- if settings.favicon != blank -%}
    <link rel="shortcut icon" href="{{ settings.favicon | img_url: '32x32' }}" type="image/png">
  {%- endif -%}

  <title>{{ shop.name }}</title>

  {%- if page_description -%}
    <meta name="description" content="{{ page_description | escape }}">
  {%- endif -%}

  {%- include 'social-meta-tags' -%}

  {{ 'theme.scss.css' | asset_url | stylesheet_tag }}

  <!--[if (gt IE 9)|!(IE)]><!--><script src="{{ 'vendor.js' | asset_url }}" defer="defer"></script><!--<![endif]-->
  <!--[if lt IE 9]><script src="{{ 'vendor.js' | asset_url }}"></script><![endif]-->

  <!--[if (gt IE 9)|!(IE)]><!--><script src="{{ 'theme.js' | asset_url }}" defer="defer"></script><!--<![endif]-->
  <!--[if lt IE 9]><script src="{{ 'theme.js' | asset_url }}"></script><![endif]-->

  {{ content_for_header }}
</head>

<body>

  <header role="banner">
    <h1 itemscope itemtype="http://schema.org/Organization">
      {{ shop.name }}
    </h1>
  </header>

  <main role="main" id="MainContent">
    {{ content_for_layout }}
  </main>

  <footer role="complementary">
    {%- capture shopify_link -%}
      <a href="https://www.shopify.com" aria-label="Shopify">
        {%- include 'icon-shopify-logo' -%}
      </a>
    {%- endcapture -%}
    {{ 'general.password_page.powered_by_shopify_html' | t: shopify: shopify_link }}
  </footer>

  <div id="Login">
    <h2>{{ 'general.password_page.login_form_heading' | t }}</h2>

    {%- form 'storefront_password' -%}
      {{ form.errors | default_errors }}

      <label for="password">{{ 'general.password_page.login_form_password_label' | t }}</label>
      <input type="password"
        name="password"
        id="password"
        placeholder="{{ 'general.password_page.login_form_password_placeholder' | t }}">

      <button type="submit" name="commit">
        {{ 'general.password_page.login_form_submit' | t }}
      </button>
    {%- endform -%}

    <p>{{ 'general.password_page.admin_link_html' | t }}</p>
  </div>

</body>
</html>
```
