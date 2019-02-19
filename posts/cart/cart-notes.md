---
path: '/example/cart-notes'
title: Cart notes
desc: You can add a text area to the cart page that allows customers to share special instructions for their order. Cart notes are submitted with a customer's order, and will appear on their order page in the Shopify admin.
category: cart
tags: [ "cart", "cart-notes", "instructions" ]
date: 2018-12-05
---

1.  Add the following code to the `cart.liquid` file, inside the form. Cart notes typically appear just before the checkout button. Make sure that you keep `name="note"` so that cart notes are submitted correctly.

```liquid
<label for="CartNote">Special instructions</label>
<textarea name="note" id="CartNote">{{ cart.note }}</textarea>
```
