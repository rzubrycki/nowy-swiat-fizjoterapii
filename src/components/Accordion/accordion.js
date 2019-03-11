import React, { Component, Fragment } from 'react'

import posed from 'react-pose'
import styles from './accordion.module.scss'
import ArrowUpIcon from '../../assets/images/arrow-up.svg'

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
        {this.props.data.map(({ title, content, duration }, i) => {
          return (
            <Fragment key={i}>
              <h6
                onClick={() => this.setState({ open: open === i ? false : i })}
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
                <span className={styles.duration}>{duration}</span>
              </h6>
              <Content
                className={styles.content}
                pose={open === i ? 'open' : 'closed'}
              >
                <div className={styles.contentWrapper}>
                  <p>{content}</p>
                </div>
              </Content>
            </Fragment>
          )
        })}
      </Fragment>
    )
  }
}
