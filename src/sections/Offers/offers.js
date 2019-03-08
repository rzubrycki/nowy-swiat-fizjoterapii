import React, { Component, Fragment } from 'react'
import styles from './offers.module.scss'
import Layout from '../../components/Layout/layout'
import posed from 'react-pose'
import ArrowUp from '../../assets/images/arrow-up.svg'

const data = [
  {
    title: 'Terapia',
    content: `Terapia manualna jest najbardziej bolesna`,
  },
  {
    title: 'Fala uderzeniowa',
    content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`,
  },
]

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

export default class offers extends Component {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <Layout>
        <h2>Oferta</h2>
        <Fragment>
          {data.map(({ title, content }, i) => (
            <Fragment key={i}>
              <h3
                className={styles.title}
                onClick={() => this.setState({ open: open === i ? false : i })}
              >
                {open === i ? (
                  <img
                    src={ArrowUp}
                    alt="arrow up"
                    className={styles.arrowIcon}
                  />
                ) : (
                  <img
                    src={ArrowUp}
                    alt="arrow up"
                    className={`${styles.arrowIcon} ${styles.open}`}
                  />
                )}
                {title}
              </h3>
              <Content
                className={styles.content}
                pose={open === i ? 'open' : 'closed'}
              >
                <div className={styles.contentWrapper}>{content}</div>
              </Content>
            </Fragment>
          ))}
        </Fragment>
      </Layout>
    )
  }
}
