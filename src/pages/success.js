import React from 'react'

import logo from '../assets/images/logo.svg'
import { Link } from 'gatsby'

export function Success() {
  return (
    <div className="successWrapper">
      <img src={logo} alt="logo Nowy Świat Fizjoterapii" />
      <p>
        Dziękujemy za wysłanie formularza. <br />
        Odezwiemy się najszybciej jak to możliwe.
      </p>
      <Link to="/">
        <button>Powrót</button>
      </Link>
    </div>
  )
}
