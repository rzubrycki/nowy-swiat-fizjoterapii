import React from 'react'

import { Link } from 'react-scroll'
import logo from '../../../assets/images/logo.svg'
import styles from './header.module.scss'

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
      <img src={logo} alt="Nowy Świat Fizjoterapii" className={styles.logo} />
    </Link>
  </header>
)
