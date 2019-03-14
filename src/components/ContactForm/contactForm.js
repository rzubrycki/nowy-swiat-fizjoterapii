import React, { Component } from 'react'

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
    .min(10, 'Wiadomość jest za krótka. Napisz coś więcej.')
    .required('Pole jest wymagane.'),
})

export default class extends Component {
  render() {
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
            className={styles.formWrapper}
          >
            <h2 className="sectionHeading">Kontakt</h2>
            <input type="hidden" name="form-name" value="kontakt" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className={styles.fieldWrapper}>
              <Field
                name="firstName"
                className={styles.formControl}
                placeholder="Imię"
              />
              {errors.firstName && touched.firstName ? (
                <div className={styles.errorMessage}>{errors.firstName}</div>
              ) : null}
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                name="lastName"
                className={styles.formControl}
                placeholder="Nazwisko"
              />
              {errors.lastName && touched.lastName ? (
                <div className={styles.errorMessage}>{errors.lastName}</div>
              ) : null}
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                name="email"
                type="email"
                className={styles.formControl}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className={styles.errorMessage}>{errors.email}</div>
              ) : null}
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                component="textarea"
                name="message"
                placeholder="Treść wiadomości"
                rows="4"
                className={styles.formControl}
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
}
