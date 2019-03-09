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
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum?
          </h1>
          <p className={styles.introText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum?
          </p>
        </div>
      </div>
    )}
  />
)
