import React from 'react'

import CloseIcon from '../../assets/images/close.svg'
import styles from './modal.module.scss'

export default ({ close }) => (
  <div className={styles.modalWrapper}>
    <h2>Przebyte Kursy</h2>
    <span onClick={close} className={styles.closeButton}>
      <img src={CloseIcon} alt="close" />
    </span>
    <div className={styles.listWrapper}>
      <ul>
        <li>Terapia Manualna wg koncepcji Maitland</li>
        <li>Diagnozowanie i leczenie zespołów bólowych kręgosłupa i kończyn metodą McKenziego - kurs A</li>
        <li>PNF - kurs podstawowy 1 i 2</li>
        <li>Kurs Funkcjonalnej Terapii Manualnej wg koncepcji Briana Mulligana - część A i B</li>
        <li>Badanie i fizjoterapia funkcjonalna w uszkodzeniach stawu kolanowego - moduł I i II</li>
        <li>Badanie i fizjoterapia funkcjonalna w uszkodzeniach stawu barkowego</li>
        <li> Kliniczne warsztaty szkoleniowe dla fizjoterapeutów - staw ramienny</li>
        <li>Taping Medyczny</li>
        <li>Taping Sportowy</li>
        <li>Kurs stabilizacji centralnej, stawów obwodowych i stawu skroniowo-żuchwowego - moduł I, II i III</li>
        <li> Instruktor Pilates (Metoda Pilates - praca na matach, Metoda Pilates - Senior)</li>
        <li> Kurs ESP - Muscle Balance and Sport Training</li>
        <li> Nowoczesne formy masażu i inne techniki wykorzystywane w fizjoterapii (masaż poprzeczny, funkcyjny, tkanek głębokich)</li>
        <li>Masaż w sporcie</li>
        <li>Wprowadzenie do metody Fascial Distortion Model </li>
        <li> Anatomy Trains - moduł I</li>
        <li> Fizjoterapia w geriatrii</li>
        <li>Zintegrowane metody fizjoterapii</li>
        <li> Nowatorskie metody planowania i oceny korekcji paluchów koślawych na podstawie badań tomograficznych i funkcjonalnych</li>
        <li>Kolano dziecięce - staw rzepkowo-udowy</li>
        <li>Etapy rehabilitacji u pacjentów z zaburzeniami równowagi przy wykorzystaniu platform diagnostyczno-pomiarowych</li>
        <li>Osteoporoza - choroba cywilizacyjna XXI wieku - aktualne aspekty profilaktyki, leczenia i rehabilitacji</li>
        <li> Urazy w sportach zimowych</li>
        <li>Praktyczne aspekty wykorzystania fali uderzeniowej w fizjoterapii</li>
        <li> Wprowadzenie do metody  NEURAC 1 i wykorzystanie aparatu REDCORD w rehabilitacji medycznej</li>
        <li> Celowana termiczna stymulacja tkanek w terapii układu ruchu </li>
        <li>Podstawy obsługi i pracy z aparatem: terapia ultradźwiękowa, elektroterapia, laseroterapia , magnetoterapia, fala uderzeniowa i drenaż limfatyczny</li>
        <li>Certyfikat z obsługi i bezpieczeństwa pracy na urządzeniach: VECTIS (urządzenie do ćwiczeń stawu barkowego z oporem elastycznym), TELKO (urządzenie do ćwiczeń kończyn dolnych), JUPITER (fotel do ćwiczeń oporowych kończyny dolnej)</li>
      </ul>
      <button onClick={close}>Powrót</button>
    </div>
  </div>
)