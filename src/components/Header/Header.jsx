import React from 'react'

import { Link } from 'react-router-dom'

import './header.scss'
import Search from '../Search/Search'
const Header = ({setSearchValue, searchValue}) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="images/image1.png" alt="" />
          <div className="texts">
            <h1>Amir Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Search 
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>
      <div className="header__cart">
        <a href="" className="btn--cart">
          <Link to='/empty'>
            <span>520 s</span>
          </Link>
          
          <div className="btn__delimiter"></div>
          <Link to='/basket'>
            <img src="images/icon1.svg" alt="" />
            <span>3</span>
          </Link>
        </a>
      </div>
    </header>
  )
}

export default Header