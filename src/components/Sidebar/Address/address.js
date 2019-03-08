import React from 'react'
import styles from './address.module.scss'

export default () => (
  <address className={styles.bioInfo}>
    Anna Roczniak-Zubrycka
    <br />
    ul. Nowy Świat 70B
    <br />
    16-030, Supraśl
    <br />
    +48 506 171 274‬
    <br />
    <a
      className={styles.email}
      href="mailto:aneczka.roczniak@gmai.com?subject=Zapytanie%20ze%20strony%20ania.pl"
    >
      aneczka.roczniak@gmail.com
    </a>
  </address>
)
