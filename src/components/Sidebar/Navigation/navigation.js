import React from 'react'

import { Link } from 'react-scroll'
import styles from './navigation.module.scss'

export default () => (
  <nav className={styles.nav}>
    <Link
      className={styles.link}
      activeClass="active"
      to="intro"
      spy={true}
      smooth={true}
      duration={500}
      offset={-30}
    >
      Home
    </Link>
    <Link
      className={styles.link}
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      offset={-30}
    >
      O mnie
    </Link>
    <Link
      className={styles.link}
      activeClass="active"
      to="offers"
      spy={true}
      smooth={true}
      duration={500}
      offset={-30}
    >
      Oferta
    </Link>
    <Link
      className={styles.link}
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      offset={100}
    >
      Kontakt
    </Link>
  </nav>
)
