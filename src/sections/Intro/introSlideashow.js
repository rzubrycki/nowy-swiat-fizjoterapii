import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './intro.module.scss'

const rece = {
  test: 'Szukasz ukojenia w bólu? Chętnie pomogę.',
  test2:
    'Jezeli doskwiera Ci ból lub inny problem narządu ruchu to dobrze trafiłeś.',
}

const tr = {
  test: 'Nowoczesne metody fizjoterapeutyczne i sprzęt zabiegowy',
  test2:
    'Ukończonych wiele kursów, chęć ciągłego poszerzania wiedzy i umiejętności oraz solidna baza zabiegowa daje pewność rychłego uporania się z problemem zdrowotnym.',
}

const banka = {
  test: 'Indywidualne podejście',
  test2: 'Skupienie na potrzebach, problemach i oczekiwaniach pacjenta.',
}

const pistolet = {
  test: 'Miła atmosfera',
  test2:
    'Dobre nastawienie psychiczne potrafi znacząco przyśpieszyć powrót do zdrowia.',
}

function SlideShow() {
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
          <div className={styles.introHeading}>
            <h1>{rece.test}</h1>
            <p>{rece.test2}</p>
          </div>
        )

      case 'foto2':
        return (
          <div className={styles.introHeading}>
            <h1>{tr.test}</h1>
            <p>{tr.test2}</p>
          </div>
        )

      case 'foto3':
        return (
          <div className={styles.introHeading}>
            <h1>{banka.test}</h1>
            <p>{banka.test2}</p>
          </div>
        )

      case 'foto4':
        return (
          <div className={styles.introHeading}>
            <h1>{pistolet.test}</h1>
            <p>{pistolet.test2}</p>
          </div>
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
      {handlePhotoText()}
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
export default SlideShow
