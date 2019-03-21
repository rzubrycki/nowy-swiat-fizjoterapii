import React from 'react'

import '../assets/css/normalize.css'
import { Element } from 'react-scroll'
import Sidebar from '../components/Sidebar/sidebar'
import IntroSection from '../sections/Intro/intro'
import AboutSection from '../sections/About/about'
import OffersSection from '../sections/Offers/offers'
import ContactSection from '../sections/Contact/contact'

export default () => (
  <React.Fragment>
    <Element name="intro" className="element">
      <IntroSection />
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
  </React.Fragment>
)
