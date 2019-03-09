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
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{' '}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)
