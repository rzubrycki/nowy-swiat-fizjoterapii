import React from 'react'

import '../assets/css/normalize.css'
import { Element } from 'react-scroll'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Sidebar } from '../components/Sidebar/sidebar'
import { SlideShow } from '../sections/Intro/slideShow'
import { AboutSection } from '../sections/About/about'
import { OffersSection } from '../sections/Offers/offers'
import { ContactSection } from '../sections/Contact/contact'
import { FacebookMessangerWidget } from '../components/FacebookMessangerWidget/facebookMessangerWidget'

export default () => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet>
          <html lang="pl" /> <html lang="pl" />
          <title>{data.site.siteMetadata.defaultTitle}</title>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="google-site-verification"
            content="_YGuJ0KtOyJwYSvcFfsEh0kY27XAter24us4PJvqUj8"
          />
          <meta
            property="og:description"
            content={data.site.siteMetadata.description}
          />
          <meta property="og:locale" content="pl" />
          <meta
            property="og:site_name"
            content={data.site.siteMetadata.title}
          />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nowyswiat.fi/" />
        </Helmet>
        <Element name="intro" className="element">
          <SlideShow />
        </Element>
        <Element name="about" className="element">
          <AboutSection />
        </Element>
        <Element name="offers" className="element">
          <OffersSection />
        </Element>
        <Element name="contact" className="element">
          <ContactSection />
        </Element>
        <Sidebar />
        <FacebookMessangerWidget />
      </React.Fragment>
    )}
  />
)
