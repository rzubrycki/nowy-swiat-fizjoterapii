import React from 'react'
import Layout from '../../components/Layout/layout'

export default () => (
  <Layout>
    <h2 className="sectionHeading">Kontakt</h2>
    <form name="contact" data-netlify="true">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Send</button>
    </form>
  </Layout>
)
