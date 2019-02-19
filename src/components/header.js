import React from 'react'

import logo from '../images/shopify-partners-color-logo.svg'
import IconMobileHamburger from '../images/icons/mobile-hamburger.svg'
import IconClose from '../images/icons/close.svg'

const Header = ({ siteTitle }) => (
  <header id="SiteNavContainer" className="site-nav-container is-sticky">
    <div className="marketing-nav-wrapper">
      <a className="in-page-link skip-to-main visuallyhidden focusable" data-ga-event="Main Nav" data-ga-action="Skip to content" data-trekkie-event="Main Nav" data-trekkie-action="Skip to content" data-trekkie-id="Main Nav Skip to content" href="#Main">Skip to Content</a>
      <nav className="marketing-nav marketing-nav--primary marketing-nav--skin-light" id="ShopifyMainNav" itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" aria-label="Main Navigation">
        <div className="marketing-nav__logo ">
          <a href="https://shopify.com/partners" className="marketing-nav__logo__shopify marketing-nav__logo__shopify--partners" data-ga-event="Main Nav" data-ga-action="Logo" data-trekkie-event="Main Nav" data-trekkie-action="Logo" data-trekkie-id="Main Nav Logo">
            <svg className="icon" aria-labelledby="icon-shopify-partners-color-logo" role="img">
              <title id="icon-shopify-partners-color-logo">Home</title>
              <use xlinkHref={`#${logo.id}`} />
            </svg>
          </a>
        </div>
        <span className="marketing-nav__items display--expanded-nav"></span>
        <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
          <li><a href="//partners.shopify.com/organizations" className="marketing-nav__item marketing-nav__item--user" itemProp="name">Log in </a></li>
          <li><a href="https://partners.shopify.com/signup" className="marketing-nav__button marketing-button marketing-button--small" itemProp="name" data-ga-event="Partners" data-ga-action="Signup" data-ga-label="Main Nav Top Button" data-fb-event="PartnerJoinNow">Join now </a></li>
        </ul>
        <button name="button" type="button" className="marketing-nav__hamburger hide--expanded-nav js-drawer-open-right" aria-controls="NavDrawer" aria-expanded="false">
          <svg className="icon" aria-labelledby="icon-modules-mobile-hamburger" role="img">
            <title id="icon-modules-mobile-hamburger">Open Main Navigation</title>
            <use xlinkHref={`#${IconMobileHamburger.id}`} />
          </svg>
        </button>
      </nav>
    </div>
    <div id="NavDrawer" className="drawer drawer--right ">
      <div className="drawer__inner">
        <div className="drawer__top">
          <div className="marketing-nav__logo">
            <a href="/partners" className="marketing-nav__logo__shopify marketing-nav__logo__shopify--partners">
              <svg className="icon" aria-labelledby="icon-shopify-partners-color-logo" role="img">
                <title id="icon-shopify-partners-color-logo">Home</title>
                <use xlinkHref={`#${logo.id}`} />
              </svg>
            </a>
          </div>
          <button name="button" type="button" className="drawer__close-button js-drawer-close" aria-controls="NavDrawer" aria-expanded="true">
            <svg className="icon" aria-labelledby="icon-close" role="img">
              <title id="icon-close">Close Main Navigation</title>
              <use xlinkHref={`#${IconClose.id}`} />
            </svg>
          </button>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="drawer__items drawer__items--user js-is-initialized" id="DrawerNavSecondaryAccordion">
            <li><a href="//partners.shopify.com/organizations" className="drawer__item" itemProp="name">Log in </a></li>
            <li><a href="https://partners.shopify.com/signup" className="drawer__item color-primary" itemProp="name" data-ga-event="Partners" data-ga-action="Signup" data-ga-label="Main Nav Top Button" data-fb-event="PartnerJoinNow">Join now </a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
