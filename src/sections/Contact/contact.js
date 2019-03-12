import React from 'react'

import styles from './contact.module.scss'
import Layout from '../../components/Layout/layout'
import ContactForm from '../../components/ContactForm/contactForm'
import Map from '../../components/Map/map'

export default () => (
  <Layout>
    <div className={styles.contactWrapper}>
      <Map />
      <ContactForm />
    </div>
  </Layout>
)
