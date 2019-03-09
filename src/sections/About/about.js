import React, { Component } from 'react'

import Layout from '../../components/Layout/layout'
import Modal from 'react-modal'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
    }
  }

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <Layout>
        <h2 className="sectionHeading">o mnie</h2>
        <article>
          <p className="highlightedText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum? Illum praesentium, alias vel non dolore
            hic odio error explicabo eos nam officia repellendus odit debitis
            sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum? Illum praesentium, alias vel non dolore
            hic odio error explicabo eos nam officia repellendus odit debitis
            sit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores placeat illum saepe laborum? Illum praesentium, alias vel
            non dolore hic odio error explicabo eos nam officia repellendus odit
            debitis sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum? Illum praesentium, alias vel non dolore
            hic odio error explicabo eos nam officia repellendus odit debitis
            sit.
          </p>
          <div className="dialogButtons">
            <button onClick={this.handleOpenModal}>Wykształcenie</button>
            <button>Przebyte Kursy</button>
          </div>
        </article>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleCloseModal}
          onAfterOpen={this.afterOpenModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          dupa
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleCloseModal}
          onAfterOpen={this.afterOpenModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          wielka dupa
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </Layout>
    )
  }
}
