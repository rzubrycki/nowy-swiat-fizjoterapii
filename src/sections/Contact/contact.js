import React from 'react'
import Layout from '../../components/Layout/layout'

export default () => (
  <Layout>
    <h2 className="sectionHeading">Kontakt</h2>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" name="name" placeholder="your name" />
      <button>send</button>
    </form>
  </Layout>
)
