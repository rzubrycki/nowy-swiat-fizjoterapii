import React, { Component } from 'react'

import Layout from '../../components/Layout/layout'
import Modal from 'react-modal'
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
          <p>
            Jako fizjoterapeuta pracuję od 2010 roku. Posiadam tytuł mgr
            Fizjoterapii oraz mgr Wychowania Fizycznego. Studiowałam na Akademii
            Wychowania Fizycznego w Krakowie. Studia dały mi solidną podstawę,
            którą wciąż rozwijam i doskonalę na specjalistycznych kursach.
          </p>
          <p>
            Doświadczenie zawodowe zdobyłam pracując z pacjentami
            ortopedycznymi, pourazowymi oraz sportowcami. Dodatkowo miałam
            możliwość pracy pedagogicznej, jako nauczyciel przedmiotów
            zawodowych w Szkole Policealnej kształcącej przyszłych masażystów.
          </p>
          <p>
            Byłam współautorem kilku publikacji w literaturze o tematyce
            medycznej. Artykuły, które wspomogłam przy realizacji to: ...
            Prowadziłam także wykład dotyczący rehabilitacji w osteoporozie na
            konferencji "Osteoporoza - choroba cywilizacyjna XXI wieku -
            aktualne aspekty profilaktyki, leczenia i rehabilitacji".
          </p>
          <p>
            Moją odwieczną pasją jest sport i rekreacja. Stąd drugi ukończony
            kierunek studiów - Wychowanie Fizyczne. Połączenie obu tych zawodów
            daje możliwość pełniejszego spojrzenia na ciało człowieka - jego
            możliwości i ograniczenia.
          </p>
          <div className="dialogButtons">
            <button onClick={() => this.handleOpenModal(1)}>
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
            <CoursesModal close={this.handleCloseModal} />
        </Modal>
      </Layout>
    )
  }
}
