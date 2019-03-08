import React from 'react'

import styles from './sidebar.module.scss'
import Header from './Header/header'
import Navigation from './Navigation/navigation'
import Address from './Address/address'

export default () => (
  <div className={styles.sidebar}>
    <Header />
    <Navigation />
    <Address />
  </div>
)
