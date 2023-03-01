import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div >
        <p className='text-2xl text-upper font-bold text-white'>{props.title}</p>
        <p className='header-text'>{props.text}</p>
    </div>
  )
}

export default Header