import React from 'react'

import iconGlobeSimple from '../images/icons/globe-simple.svg'
import iconNavArrowDown from '../images/icons/nav-arrow-down.svg'
import iconFacebook from '../images/icons/social-facebook.svg'
import iconInstagram from '../images/icons/social-instagram.svg'
import iconLinkedin from '../images/icons/social-linkedin.svg'
import iconPinterest from '../images/icons/social-pinterest.svg'
import iconPlus from '../images/icons/social-plus.svg'
import iconSnapchat from '../images/icons/social-snapchat.svg'
import iconTwitter from '../images/icons/social-twitter.svg'
import iconYoutube from '../images/icons/social-youtube.svg'

const Footer = ({ siteTitle }) => (
  <footer className="footer--main" id="ShopifyMainFooter" role="contentinfo">
    <div className="footer-top">
      <div className="grid">
        <div className="grid__item">
          <div className="footer-nav">
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="https://news.shopify.com">Press and Media</a>
            <a external="true" href="/plus">Shopify Plus</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-3">
          <h3 className="footer-heading heading--5 ">Online store</h3>
          <div className="gutter-bottom--mobile footer__column-list">
            <a className="footer-link " href="/online">Sell online</a>
            <a className="footer-link " href="/online/ecommerce-solutions">Features</a>
            <a className="footer-link " href="/examples">Examples</a>
            <a className="footer-link " href="/website">Website editor</a>
            <a className="footer-link " href="/tour">Online retail</a>
            <a className="footer-link " href="/tour/ecommerce-website">Ecommerce website</a>
            <a className="footer-link " href="/domains">Domain names</a>
            <a className="footer-link " href="/tour/website-design">Themes</a>
            <a className="footer-link " href="/tour/shopping-cart">Shopping cart</a>
            <a className="footer-link " href="/tour/ecommerce-hosting">Ecommerce hosting</a>
            <a className="footer-link " href="/mobile">Mobile commerce</a>
            <a className="footer-link " href="/">Ecommerce software</a>
            <a className="footer-link " href="/online-store">Online store builder</a>
            <a className="footer-link " href="/oberlo">Dropshipping</a>
          </div>
        </div>
        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
          <h3 className="footer-heading heading--5 ">Point of sale</h3>
          <div className="gutter-bottom--mobile ">
            <a className="footer-link " href="/pos">Point of sale</a>
            <a className="footer-link " href="/pos/features">Features</a>
            <a className="footer-link " href="https://hardware.shopify.com">Hardware</a>
            <a className="footer-link " href="/pos/software">POS software</a>
          </div>
        </div>
        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
          <h3 className="footer-heading heading--5 ">Support</h3>
          <div className="gutter-bottom--mobile ">
            <a className="footer-link " href="https://help.shopify.com/questions">24/7 support</a>
            <a className="footer-link " href="https://help.shopify.com/">Shopify Help Center</a>
            <a className="footer-link " href="https://ecommerce.shopify.com/forums">Forums</a>
            <a className="footer-link " href="https://help.shopify.com/api">API documentation</a>
            <a className="footer-link " href="/tools">Free tools</a>
            <a className="footer-link " href="https://burst.shopify.com">Free stock photos</a>
            <a className="footer-link " href="https://exchangemarketplace.com">Websites for sale</a>
            <a className="footer-link " href="https://hatchful.shopify.com">Logo maker</a>
          </div>
        </div>
        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
          <h3 className="footer-heading heading--5 ">Shopify</h3>
          <div className="gutter-bottom--mobile ">
            <a className="footer-link " href="/contact">Contact</a>
            <a className="footer-link " href="/partners">Partner program</a>
            <a className="footer-link " href="/affiliates">Affiliate program</a>
            <a className="footer-link " href="https://developers.shopify.com/">App developers</a>
            <a className="footer-link " href="https://investors.shopify.com">Investors</a>
            <a className="footer-link " href="/blog/topics">Blog topics</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="grid">
        <div className="grid__item grid__item--tablet-up-2 footer-bottom__social text-center--mobile">
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer"
          data-ga-event="Social" data-ga-action="Facebook" data-ga-label="Footer" href="https://www.facebook.com/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-facebook-8-title" role="img">
              <title id="icon-modules-social-facebook-8-title">Facebook</title>
              <use xlinkHref={`#${iconFacebook.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Twitter" data-ga-label="Footer" href="https://twitter.com/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-twitter-9-title" role="img">
              <title id="icon-modules-social-twitter-9-title">Twitter</title>
              <use xlinkHref={`#${iconTwitter.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Youtube" data-ga-label="Footer" href="https://www.youtube.com/user/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-youtube-10-title" role="img">
              <title id="icon-modules-social-youtube-10-title">YouTube</title>
              <use xlinkHref={`#${iconYoutube.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Instagram" data-ga-label="Footer" href="https://www.instagram.com/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-instagram-11-title" role="img">
              <title id="icon-modules-social-instagram-11-title">Instagram</title>
              <use xlinkHref={`#${iconInstagram.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Linkedin" data-ga-label="Footer" href="https://www.linkedin.com/company/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-linkedin-12-title" role="img">
              <title id="icon-modules-social-linkedin-12-title">LinkedIn</title>
              <use xlinkHref={`#${iconLinkedin.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Pinterest" data-ga-label="Footer" href="https://www.pinterest.com/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-pinterest-13-title" role="img">
              <title id="icon-modules-social-pinterest-13-title">Pinterest</title>
              <use xlinkHref={`#${iconPinterest.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Plus" data-ga-label="Footer" href="https://plus.google.com/+shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-plus-14-title" role="img">
              <title id="icon-modules-social-plus-14-title">Google Plus</title>
              <use xlinkHref={`#${iconPlus.id}`} />
            </svg>
          </a>
          <a className="footer-social__icon " target="_blank" rel="me noopener noreferrer" data-ga-event="Social" data-ga-action="Snapchat" data-ga-label="Footer" href="https://www.snapchat.com/add/shopify">
            <svg className="icon" aria-labelledby="icon-modules-social-snapchat-15-title" role="img">
              <title id="icon-modules-social-snapchat-15-title">Snapchat</title>
              <use xlinkHref={`#${iconSnapchat.id}`} />
            </svg>
          </a>
        </div>
        <div className="grid__item grid__item--tablet-up-4 footer-bottom__links text-center--mobile text-right--tablet-up">
          <a href="http://shopify.com/partners/legal/terms">Terms of Service</a>
          <a href="http://shopify.com/partners/legal/privacy">Privacy Policy</a>
          <div className="footer-country-select">
            <div className="popover-wrapper js-popover footer-country-select__popover" data-position="top" data-toggle-only-on-click="true">
              <button type="button" className="popover-trigger footer-country-select__trigger" data-ga-event="Footer" data-ga-label="CountrySelector" aria-expanded="false" aria-describedby="Popover1" aria-haspopup="true">
                <svg className="icon footer-country-select__globe" aria-hidden="true" focusable="false">
                  <use xlinkHref={`#${iconGlobeSimple.id}`} />
                </svg>
                <span className="footer-country-select__text">Canada (English)</span><span className="visuallyhidden">Change your country or region.</span>
                <svg className="icon footer-country-select__arrow" aria-hidden="true" focusable="false">
                  <use xlinkHref={`#${iconNavArrowDown.id}`} />
                </svg>
              </button>
              <div className="popover popover--top" id="Popover1">
                <ul className="popover-content footer-country-select__content">
                  <li className="footer-country-select__country"><a href="https://www.shopify.com/partners">USA</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.ca/partners">Canada (English)</a></li>
                  <li className="footer-country-select__country"><a href="https://fr.shopify.ca/partenaires">Canada (Français)</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.com.au/partners">Australia</a></li>
                  <li className="footer-country-select__country"><a href="https://pt.shopify.com/parcerias">Brasil</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.de/partners">Deutschland</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.es/partners">España</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.com.mx/partners">México</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.com.co/partners">Colombia</a></li>
                  <li className="footer-country-select__country"><a href="https://es.shopify.com/partners">Español (Intl.)</a></li>
                  <li className="footer-country-select__country"><a href="https://fr.shopify.com/partenaires">France</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.hk/partners">Hong Kong</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.ie/partners">Ireland</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.in/partners">India</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.co.id/partners">Indonesia</a></li>
                  <li className="footer-country-select__country"><a href="https://it.shopify.com/partner">Italia</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.jp/partners">日本</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.my/partners">Malaysia</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.co.nz/partners">New Zealand</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.com.ng/partners">Nigeria</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.com.ph/partners">Philippines</a></li>
                  <li className="footer-country-select__country"><a href="https://ru.shopify.com/partners">Russia</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.com.sg/partners">Singapore</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.co.za/partners">South Africa</a></li>
                  <li className="footer-country-select__country"><a href="https://www.shopify.co.uk/partners">United Kingdom</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
