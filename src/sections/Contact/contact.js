import React from 'react'
import Layout from '../../components/Layout/layout'

export default () => (
  <Layout>
    <h2>Kontakt</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat
      illum saepe laborum? Illum praesentium, alias vel non dolore hic odio
      error explicabo eos nam officia repellendus odit debitis sit.
    </p>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  </Layout>
)
