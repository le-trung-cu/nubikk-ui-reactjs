import React from 'react'
import Button from '../button/button.component'
import { BsX } from 'react-icons/bs'
import './search.styles.scss';

const Search = ({ hidden, close }) => {
    return (
        <div className={`${hidden ? 'hidden ' : ''}search`}>
            <form className="search__form">
                <input className="search__input" type="text" name="" id="" placeholder="Search products..." />
                <Button>SEARCH</Button>
            </form>
            <span className="close-icon">
                <BsX className="close" onClick={close} />
            </span>
        </div>
    )
}

export default Search;