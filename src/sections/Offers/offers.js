import React from 'react'

import styles from './offers.module.scss'
import Layout from '../../components/Layout/layout'
import Accordion from '../../components/Accordion/accordion'
import {
  IndividualWorkWithPatient,
  PhysioTherapy,
  WorkWithMachines,
  Aestetihcs,
} from './offersData'

export default () => (
  <Layout>
    <div className={styles.contentWrapper}>
      <h2>Oferta</h2>
      <div className={styles.accordionWrapper}>
        <p className={`${styles.blockHeading} ${styles.fixMargin}`}>Indywidualna praca z pacjentem:</p>
        <Accordion data={IndividualWorkWithPatient} />
      </div>
      <div>
        <p className={styles.blockHeading}>Fizykoterapia:</p>
        <Accordion data={PhysioTherapy} />
      </div>
      <div>
        <p className={styles.blockHeading}>Praca z urządzeniem:</p>
        <Accordion data={WorkWithMachines} />
      </div>
      <div>
        <p className={styles.blockHeading}>Estetyka:</p>
        <Accordion data={Aestetihcs} />
      </div>
      <p className={styles.durationTip}>* czas trwania zabiegu uzależniony jest od rozległości miejsca zabiegowego</p>
    </div>
  </Layout>
)
