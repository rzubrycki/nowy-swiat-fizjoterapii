import React from 'react'

import styles from './layout.module.scss'

export default ({ children }) => (
  <section className={styles.container}>{children}</section>
)
