import React from 'react'

const HeroSection = ({isFrontPage, siteTitle, siteSlogan}) => {
  return (
    <>
      <section className="section section--tight section-padding ui-hero">
        <div className="grid">
          <div className="section-heading--left grid__item">
            <p className="section-heading__kicker heading--5 hide--mobile">Tools</p>

            {isFrontPage ? (
              <>
                <h1 className="section-heading__heading heading--2 ui-hero__header">{siteTitle}</h1>
                <h2 className="text-major hide--mobile ui-hero__header">{siteSlogan}</h2>
              </>
            ) : (
              <>
                <h2 className="section-heading__heading heading--2 ui-hero__header">{siteTitle}</h2>
                <h3 className="text-major hide--mobile ui-hero__header">{siteSlogan}</h3>
              </>
            )}
          </div>
        </div>

      </section>
    </>
  )
}

export default HeroSection
