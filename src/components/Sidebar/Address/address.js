import React from 'react'

import styles from './address.module.scss'
import logo from '../../../assets/images/logo.svg'
import fbLogo from '../../../assets/images/facebook.svg'

export default props => (
  <address className={styles.address}>
    {props.logo ? <img src={logo} alt="logo" className={styles.logo} /> : null}
    {props.logo ? null : 'Nowy Świat Fizjoterapii'}
    <br />
    Anna Roczniak-Zubrycka
    <br />
    ul. Nowy Świat 70B
    <br />
    16-030, Supraśl
    <br />
    +48 502 489 314
    <br />
    <a
      href="mailto:aneczka.roczniak@gmai.com?subject=Zapytanie%20ze%20strony%20ania.pl"
      className="emailLink"
    >
      aneczka.roczniak@gmail.com
    </a>
    {props.logo ? null : (
      <a
        href="https://www.facebook.com/nowyswiatfizjoterapii/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.facebookLogo}
      >
        <img src={fbLogo} alt="facebook logo" />
      </a>
    )}
  </address>
)
