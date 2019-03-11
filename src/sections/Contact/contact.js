import React from 'react'
import Layout from '../../components/Layout/layout'

export default () => (
  <Layout>
    <h2 className="sectionHeading">Kontakt</h2>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input hidden name="bot-field" />
      <input type="text" placeholder="name" name="name" />
      <div data-netlify-recaptcha />
      <button>Send</button>
    </form>
  </Layout>
)
