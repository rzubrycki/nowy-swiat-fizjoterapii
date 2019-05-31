import React, { Fragment } from 'react'

import styles from './navigation.module.scss'
import { Link } from 'react-scroll'
import MediaQuery from 'react-responsive'

const aboutMe = (
  <Fragment>
    <MediaQuery maxWidth={1024}>
      <Link
        className={styles.link}
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={0}
      >
        O mnie
      </Link>
    </MediaQuery>
    <MediaQuery minWidth={1025}>
      <Link
        className={`${styles.link} ${styles.safariBugSolver}`}
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={-30}
      >
        O mnie
      </Link>
    </MediaQuery>
  </Fragment>
)

const offer = (
  <Fragment>
    <MediaQuery maxWidth={1024}>
      <Link
        className={styles.link}
        activeClass="active"
        to="offers"
        spy={true}
        smooth={true}
        duration={500}
        offset={0}
      >
        Oferta
      </Link>
    </MediaQuery>
    <MediaQuery minWidth={1025}>
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
    </MediaQuery>
  </Fragment>
)

const contact = (
  <Fragment>
    <MediaQuery maxWidth={1024}>
      <Link
        className={styles.link}
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={0}
      >
        Kontakt
      </Link>
    </MediaQuery>
    <MediaQuery minWidth={1025}>
      <Link
        className={styles.link}
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-33}
      >
        Kontakt
      </Link>
    </MediaQuery>
  </Fragment>
)

export function Navigation() {
  return (
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
      {aboutMe}
      {offer}
      {contact}
    </nav>
  )
}
