const ShopifyMarketing = require('@shopify/marketing-assets')

exports.onInitialClientRender = () => {
  ShopifyMarketing.init()
}

exports.onRouteUpdate = () => {
  ShopifyMarketing.init()
}
