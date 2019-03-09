import React from 'react'

import CloseIcon from '../../assets/images/close.svg'
import styles from './modal.module.scss'

export default ({ close }) => (
  <div className={styles.modalWrapper}>
    <ul>
      <li>Akademia Wychowania Fizycznego im. Bronisława Czecha w Karakulach</li>
      <li>Akademia Wychowania Fizycznego im. Bronisława Czecha w Karakulach</li>
      <li>Akademia Wychowania Fizycznego im. Bronisława Czecha w Karakulach</li>
      <li>Akademia Wychowania Fizycznego im. Bronisława Czecha w Karakulach</li>
    </ul>
    <button onClick={close}>Powrót</button>
    <span onClick={close} className={styles.closeButton}>
      <img src={CloseIcon} alt="close" />
    </span>
  </div>
)