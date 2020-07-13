import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Search from '../search/search.component';
import { FaSearch } from 'react-icons/fa'

import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component';
import User from '../user/user.component';

const Header = ({ toggleMenuHidden }) => {
    const [searchHidden, setSearchHidden] = useState(true)

    return (
        <header className="header">
            <h1 className="logo--m">NuBikk</h1>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <span onClick={() => toggleMenuHidden()}>
                            <FaBars />
                        </span>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/men' className="nav__text">Men</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/women' className="nav__text">Women</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to='/' className="nav__text">Clothing</NavLink>
                    </li>
                </ul>
                <h1 className="logo">NuBikk</h1>
                <ul className="nav__list">
                    <li className="nav__item search-icon"
                        onClick={() => setSearchHidden(false)}>
                        <span className="search-text">Search</span>
                        <FaSearch />
                    </li>
                    <li className="nav__item faglobe">
                        <User />
                    </li>
                    <li className="nav__item">
                        <CartIcon />
                    </li>
                </ul>
            </nav>
            <Search hidden={searchHidden} close={() => setSearchHidden(true)} />
        </header>
    )
}

export default Header
