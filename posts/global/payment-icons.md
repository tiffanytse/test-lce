---
path: '/example/payment-icons'
title: Payment icons
desc: Payment icons show customers which payment methods are accepted by your online store. The icons are typically displayed in the footer of your website.
category: global
tags: ["payments", "footer", "global"]
date: 2018-10-05
---

1.  Add the following code to the `footer.liquid` section file, or wherever you wish the icons to appear.

```liquid
<style>
.pmethod__item {
  display:inline;
}
.pmethod__icons {
  width: 50px;
}
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
</style>

{%- unless shop.enabled_payment_types == empty -%}
  <span class="visuallyhidden">Supported payment methods</span>
  <ul class="pmethod">
    {%- for type in shop.enabled_payment_types -%}
      <li class="pmethod__item">
        {{ type | payment_type_svg_tag: class: 'pmethod__icons' }}
      </li>
    {%- endfor -%}
  </ul>
{%- endunless -%}
```
