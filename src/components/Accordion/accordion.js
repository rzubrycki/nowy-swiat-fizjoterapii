import React, { Component, Fragment } from 'react'

import posed from 'react-pose'
import styles from './accordion.module.scss'
import ArrowUpIcon from '../../assets/images/arrow-up.svg'
import GlobeIcon from '../../assets/images/globe.svg'

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

export default class extends Component {
  state = { open: false }

  render() {
    const { open } = this.state
    return (
      <Fragment>
        {this.props.data.map(
          (
            { title, content, listHeading, listContent, duration, price },
            i
          ) => {
            return (
              <Fragment key={i}>
                <h6
                  onClick={() =>
                    this.setState({ open: open === i ? false : i })
                  }
                >
                  {open === i ? (
                    <img
                      src={ArrowUpIcon}
                      alt="arrow up"
                      className={styles.arrowIcon}
                    />
                  ) : (
                    <img
                      src={ArrowUpIcon}
                      alt="arrow up"
                      className={`${styles.arrowIcon} ${styles.open}`}
                    />
                  )}
                  {title}
                  <span className={styles.duration}>
                    {price} / {duration}
                  </span>
                </h6>
                <Content
                  className={styles.content}
                  pose={open === i ? 'open' : 'closed'}
                >
                  <div className={styles.contentWrapper}>
                    <p>{content}</p>
                    <br />
                    {listContent.length === 0 ? null : (
                      <Fragment>
                        <p className={styles.listHeading}>{listHeading}</p>
                        <ul>
                          {listContent.map((el, index) => (
                            <li key={index}>
                              <img src={GlobeIcon} alt="Logo" />
                              {el}
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    )}
                  </div>
                </Content>
              </Fragment>
            )
          }
        )}
      </Fragment>
    )
  }
}
