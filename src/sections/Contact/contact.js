import React from 'react'

import styles from './contact.module.scss'
import Layout from '../../components/Layout/layout'
import Map from '../../components/Map/map'
import ContactForm from '../../components/ContactForm/contactForm'

export default () => (
  <Layout>
    <div className={styles.contactWrapper}>
      <Map />
      <ContactForm />
    </div>
  </Layout>
)
