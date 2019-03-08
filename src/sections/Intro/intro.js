import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './intro.module.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        introImage: file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.introSection}>
        <Img fluid={data.introImage.childImageSharp.fluid} />
        <div className={styles.introHeading}>
          <h2>witaj</h2>
          <p className={styles.introText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum? Illum praesentium, alias vel non dolore
            hic odio error explicabo eos nam officia repellendus odit debitis
            sit.
          </p>
        </div>
      </div>
    )}
  />
)
