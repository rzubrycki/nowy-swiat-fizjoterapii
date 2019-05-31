import React from 'react'

import styles from './contactForm.module.scss'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('Pole jest wymagane.'),
  lastName: Yup.string().required('Pole jest wymagane.'),
  email: Yup.string()
    .email('Niepoprawny adres email. Spróbuj ponownie.')
    .required('Pole jest wymagane.'),
  message: Yup.string()
    .min(5, 'Wiadomość jest za krótka. Napisz coś więcej.')
    .required('Pole jest wymagane.'),
})

export function ContactForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={values => {}}
    >
      {({ errors, touched, isValid }) => (
        <form
          name="kontakt"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
          className={styles.formWrapper}
        >
          <h2>Kontakt</h2>
          <input type="hidden" name="form-name" value="kontakt" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className={styles.fieldWrapper}>
            <label htmlFor="firstName">Imię</label>
            <Field
              name="firstName"
              id="firstName"
              className={styles.formControl}
            />
            {errors.firstName && touched.firstName ? (
              <div className={styles.errorMessage}>{errors.firstName}</div>
            ) : null}
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="lastName">Nazwisko</label>
            <Field
              name="lastName"
              id="lastName"
              className={styles.formControl}
            />
            {errors.lastName && touched.lastName ? (
              <div className={styles.errorMessage}>{errors.lastName}</div>
            ) : null}
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              id="email"
              type="email"
              className={styles.formControl}
            />
            {errors.email && touched.email ? (
              <div className={styles.errorMessage}>{errors.email}</div>
            ) : null}
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="message">Wiadomość</label>
            <Field
              component="textarea"
              name="message"
              id="message"
              rows="4"
              className={`${styles.formControl} ${styles.textArea}`}
            />
            {errors.message && touched.message ? (
              <div className={styles.errorMessage}>{errors.message}</div>
            ) : null}
          </div>
          <button type="submit" disabled={isValid === false}>
            Wyślij
          </button>
        </form>
      )}
    </Formik>
  )
}
