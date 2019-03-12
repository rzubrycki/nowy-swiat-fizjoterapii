import React, { Component } from 'react'

import styles from './contactForm.module.scss'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.formWrapper}>
        <form
          name="kontakt"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <h2 className="sectionHeading">Kontakt</h2>
          <input type="hidden" name="form-name" value="kontakt" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <input
            type="text"
            name="firstName"
            placeholder="Imię"
            className={styles.formControl}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nazwisko"
            className={styles.formControl}
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefon"
            className={styles.formControl}
          />
          <input
            type="email"
            name="email"
            placeholder="Adres email"
            className={styles.formControl}
          />
          <textarea
            name="message"
            placeholder="Treść wiadomości"
            rows="4"
            className={styles.formControl}
          />
          <button type="submit">Wyślij</button>
        </form>
      </div>
    )
  }
}
