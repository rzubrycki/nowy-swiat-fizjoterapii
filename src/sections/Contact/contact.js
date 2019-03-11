import React from 'react'
import Layout from '../../components/Layout/layout'

export default () => (
  <Layout>
    <h2 className="sectionHeading">Kontakt</h2>
    <form
      name="kontakt"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="kontakt" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br />
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br />
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message:
          <br />
          <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)
