---
path: '/example/customer-account-links'
title: Customer account links
desc: Customer account links allow customers to log into their existing account or to create a new account on a Shopify store. These links typically appear in the header area of a website.
category: global
tags: ["customer", "account", "header", "global"]
date: 2018-10-05
---

1.  Add the following code to the `header.liquid` section file, or in the place that you want the customer account links to appear.

```liquid
{%- if shop.customer_accounts_enabled -%}
  <ul>
    {%- if customer -%}
      <li>
        <a href="/account">Account</a>
      </li>
      <li>
        {{ 'Log out' | customer_logout_link }}
      </li>
    {%- else -%}
      <li>
        {{ 'Log in' | customer_login_link }}
      </li>
      <li>
        {{ 'Create account' | customer_register_link }}
      </li>
    {%- endif -%}
  </ul>
{%- endif -%}
```
