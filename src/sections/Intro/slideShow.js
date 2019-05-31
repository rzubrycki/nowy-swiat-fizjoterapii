import React, { useState, Fragment } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './intro.module.scss'
import {
  GeneralInfo,
  ModernMethods,
  IndividualApproach,
  GoodMood,
} from '../../consts/introData'
import logo from '../../assets/images/logo.svg'

export function SlideShow() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "slideshow" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]

  const handlePhotoText = () => {
    switch (node.name) {
      case 'foto1':
        return (
          <Fragment>
            <h1>{GeneralInfo.heading}</h1>
            <p>{GeneralInfo.develop}</p>
          </Fragment>
        )

      case 'foto2':
        return (
          <Fragment>
            <h1>{ModernMethods.heading}</h1>
            <p>{ModernMethods.develop}</p>
          </Fragment>
        )

      case 'foto3':
        return (
          <Fragment>
            <h1>{IndividualApproach.heading}</h1>
            <p>{IndividualApproach.develop}</p>
          </Fragment>
        )

      case 'foto4':
        return (
          <Fragment>
            <h1>{GoodMood.heading}</h1>
            <p>{GoodMood.develop}</p>
          </Fragment>
        )

      default:
        return null
    }
  }

  return (
    <div className={styles.introSection}>
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, ' ').substring(2)}
      />
      <img
        src={logo}
        alt="logo Nowy Świat Fizjoterapii"
        className={styles.logoMobile}
      />
      <div className={styles.introHeading}>{handlePhotoText()}</div>
      <div
        className={`${styles.arrowWrapper} ${styles.leftWrapper}`}
        onClick={() => handlePrevious()}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </div>
      <div
        className={`${styles.arrowWrapper} ${styles.rightWrapper}`}
        onClick={() => handleNext()}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </div>
    </div>
  )
}
