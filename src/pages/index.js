import React from 'react'

import '../assets/css/normalize.css'
import { Element } from 'react-scroll'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from '../components/Sidebar/sidebar'
import IntroSection from '../sections/Intro/intro'
import AboutSection from '../sections/About/about'
import OffersSection from '../sections/Offers/offers'
import ContactSection from '../sections/Contact/contact'

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
        </Helmet>
        <Element name="intro" className="element">
          <IntroSection />
        </Element>
        <Element name="about" className="element">
          <AboutSection />
        </Element>
        <Element name="offers" className="element">
          <OffersSection />
        </Element>
        <ContactSection />
        <Sidebar />
      </React.Fragment>
    )}
  />
)
