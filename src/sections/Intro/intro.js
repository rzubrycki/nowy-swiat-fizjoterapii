import React from 'react'
import Layout from '../../components/Layout/layout'
import styles from './intro.module.scss'

export default () => (
  <Layout>
    <div className={styles.intro} />
    <div className={styles.introHeading}>
      <h2>Intro</h2>
      <p className={styles.introText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat
        illum saepe laborum? Illum praesentium, alias vel non dolore hic odio
        error explicabo eos nam officia repellendus odit debitis sit.
      </p>
    </div>
  </Layout>
)
