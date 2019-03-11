import React, { Component } from 'react'

import Layout from '../../components/Layout/layout'
import Modal from 'react-modal'
import EducationalModal from '../../components/Modals/educationsModal'
import CoursesModal from '../../components/Modals/coursesModal'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      modalContent: 0,
    }
  }

  handleOpenModal = id => {
    this.setState({ modalIsOpen: true, modalContent: id })
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            placeat illum saepe laborum?
          </p>
          <div className="dialogButtons">
            <button onClick={() => this.handleOpenModal(1)}>
              Wykształcenie
            </button>
            <button onClick={() => this.handleOpenModal(2)}>
              Przebyte Kursy
            </button>
          </div>
        </article>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleCloseModal}
          overlayClassName="customModalOverlay"
          className="customModalContainer"
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          {this.state.modalContent === 1 ? (
            <EducationalModal close={this.handleCloseModal} />
          ) : (
            <CoursesModal close={this.handleCloseModal} />
          )}
        </Modal>
      </Layout>
    )
  }
}
