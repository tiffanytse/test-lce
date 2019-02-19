---
path: '/example/customer-login'
title: Customer login
desc: A customer login form is used by visitors to log in to their customer account page. This example demonstrates the markup required. If creating an account is optional, display a **"Continue as Guest"** control. Use JavaScript to show/hide the password recovery form.
category: global
tags: ["copyright", "footer", "global"]
date: 2018-10-05
---

1.  Place the following code in the `Template/customers/login.liquid` file.

```liquid
<h1>Sign in to your Account</h1>

{%- form 'customer_login' -%}
  {{ form.errors | default_errors }}

  <div>
    <label for="customerEmail">Email Address</label>
    <input type="email"
      name="customer[email]"
      id="customerEmail"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="email">
  </div>
  <div>
    <label for="customerPassword">Password</label>
    <input type="password"
      name="customer[password]"
      id="customerPassword">
  </div>

  <input type="submit" value="Sign In" />

  <p>
    {{ 'layout.customer.create_account' | t | customer_register_link }}
  </p>
  <p>
    <a href="#recover">{{ 'customer.login.forgot_password' | t }}</a>
  </p>

{%- endform -%}

<!-- If accounts are set as optional, the following will be shown as an option when coming from checkout, not on the default /login page. -->
{%- if shop.checkout.guest_login -%}
  {%- form 'guest_login' -%}
    <input type="submit" value="Continue as Guest" />
  {%- endform -%}
{%- endif -%}

<!-- Use JavaScript to show/hide this form -->
{%- form 'recover_customer_password' -%}

  {%- if form.posted_successfully? -%}
    <div role="status">
      {{ 'customer.recover_password.success' | t }}
    </div>
  {%- endif -%}

  <div id="recover"{% unless form.errors %} style="display: none;"{% endunless %}>
    <p>We will send you an email to reset your password.</p>

    {{ form.errors | default_errors }}

    <label for="customerEmail">Email Address</label>
    <input type="email"
      name="email"
      id="customerEmail"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="email">

    <input type="submit" value="Submit">
  </div>

{%- endform -%}
```
