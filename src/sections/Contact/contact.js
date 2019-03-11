import React, { Component } from 'react'

import { navigateTo } from 'gatsby-link'
import Layout from '../../components/Layout/layout'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <h2 className="sectionHeading">Kontakt</h2>
        <form
          name="kontakt"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <Recaptcha
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
              ref="recaptcha"
            />
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}
