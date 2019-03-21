import React from 'react'

import logo from '../assets/images/logo.svg'
import { Link } from 'gatsby'

export default () => (
  <div className="successWrapper">
    <img src={logo} alt="Nowy Świat Fizjoterapii" />
    <p>Dziękujemy za wysłanie formularza. <br />Odezwiemy się najszybciej jak to możliwe.</p>
    <Link to="/"> <button>Powrót</button></Link>
  </div>
)
