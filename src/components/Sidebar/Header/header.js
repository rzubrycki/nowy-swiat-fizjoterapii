import React from 'react'

import styles from './header.module.scss'
import { Link } from 'react-scroll'
import logo from '../../../assets/images/logo.svg'

export default () => (
  <header>
    <Link
      activeClass="active"
      to="intro"
      spy={true}
      smooth={true}
      duration={500}
      offset={-30}
    >
      <img src={logo} alt="logo Nowy Świat Fizjoterapii" className={styles.logo} />
    </Link>
  </header>
)
