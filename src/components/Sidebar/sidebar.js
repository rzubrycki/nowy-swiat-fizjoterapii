import React from 'react'
import styles from './sidebar.module.scss'
import { Link } from 'react-scroll'
import logo from '../../assets/images/logo.svg'

export default () => (
  <div className={styles.sidebar}>
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
  </div>
)
