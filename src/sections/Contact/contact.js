import React from 'react'

import styles from './contact.module.scss'
import Layout from '../../components/Layout/layout'
import ContactForm from '../../components/ContactForm/contactForm'
import Map from '../../components/Map/map'
import { Element } from 'react-scroll'

export default () => (
  <Layout>
    <Element name="contact" className="element">
      <div className={styles.contactWrapper}>
        <Map />
        <ContactForm />
      </div>
    </Element>
  </Layout>
)
