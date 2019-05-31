import React, { Component, Fragment, useState } from 'react'

import styles from './accordion.module.scss'
import posed from 'react-pose'
import ArrowUpIcon from '../../assets/images/arrow-up.svg'
import GlobeIcon from '../../assets/images/globe.svg'

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

export function Accordion(props) {
  const [open, openAccordion] = useState(false)

  return (
    <Fragment>
      {props.data.map(
        ({ title, content, listHeading, listContent, duration, price }, i) => {
          return (
            <Fragment key={i}>
              <h6 onClick={() => openAccordion(open === i ? false : i)}>
                {open === i ? (
                  <img
                    src={ArrowUpIcon}
                    alt="strzałka do góry"
                    className={styles.arrowIcon}
                  />
                ) : (
                  <img
                    src={ArrowUpIcon}
                    alt="strzałka do góry"
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
                            <img src={GlobeIcon} alt="globus" />
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
