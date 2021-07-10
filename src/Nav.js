import React, { useEffect, useState } from 'react'
import logo from './images/logo.png'
import avatar from './images/avatar.png'
import './Nav.css'

function Nav({ setSearchTerm }) {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  const [inputText, setInputText] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    setSearchTerm(inputText)
    setInputText('')
  }

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__left">
        <img className="nav__left__logo" src={logo} alt="Logo" />
      </div>

      <div className="nav__right">
        <form className="nav__right__search" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <img className="nav__right__avatar" src={avatar} alt="Avatar" />
      </div>
    </div>
  )
}

export default Nav

{
  /* <div className="main">
<div className={`nav ${show && 'nav__black'}`}>
  <img className="nav__logo" src={logo} alt="Logo" />
  <form className="nav__search" onSubmit={handleClick}>
    <input
      type="text"
      placeholder="search"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  </form>
  <img className="nav__avatar" src={avatar} alt="Avatar" />
</div>
</div> */
}
