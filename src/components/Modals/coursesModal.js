import React from 'react'

import styles from './modal.module.scss'
import CloseIcon from '../../assets/images/close.svg'
import { CoursesData } from '../../consts/coursesData'

export default ({ close }) => (
  <div className={styles.modalWrapper}>
    <h2>Przebyte Kursy</h2>
    <span onClick={close} className={styles.closeButton}>
      <img src={CloseIcon} alt="zamknij popup" />
    </span>
    <div className={styles.listWrapper}>
      <ul>
        {CoursesData.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
    <button onClick={close}>Powrót</button>
  </div>
)
