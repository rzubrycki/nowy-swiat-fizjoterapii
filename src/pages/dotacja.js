import React from 'react'

import { Link } from 'gatsby'
import euLogo from '../assets/images/donation/eu.jpg'
import lgdLogo from '../assets/images/donation/lgd.png'
import leaderLogo from '../assets/images/donation/leader.png'
import prowLogo from '../assets/images/donation/prow.jpg'

export default () => (
  <div className="donationWrapper">
    <div className="logoWrapper">
      <img src={euLogo} alt="EU" />
      <img src={leaderLogo} alt="Leader" />
      <img src={lgdLogo} alt="LGD" />
      <img src={prowLogo} alt="PROW" />
    </div>
    <h1 class="donationHeading">
      „Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich: Europa
      inwestująca w obszary wiejskie”
    </h1>
    <p>
      Utworzenie gabinetu fizjoterapeutycznego „Nowy Świat Fizjoterapii” w
      Supraślu zostało współfinansowane ze środków Unii Europejskiej w ramach
      poddziałania 19.2 „Wsparcie na wdrażanie operacji w ramach strategii
      rozwoju lokalnego kierowanego przez społeczność” Programu Rozwoju Obszarów
      Wiejskich na lata 2014 – 2020.
    </p>
    <Link to="/">
      <button>Powrót do strony głównej</button>
    </Link>
  </div>
)
