import React from 'react'
import './menu-aside.styles.scss';
import { BsX } from 'react-icons/bs'
import { toggleDirectoryHidden } from '../../redux/directory/directory.actions';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectFilterSorterHidden } from '../../redux/filter-sorter/filter-sorter.selector';

const MenuAside = ({ hidden, toggleDirectoryHidden, cartHidden, filterSorterHidden }) => {

    const rightAsideHidden = cartHidden && filterSorterHidden

    const classes = !hidden ? "show--menu-aside "
        : !rightAsideHidden ? "show--right-aside "
            : ""
    if (!hidden || !rightAsideHidden) {
        document.querySelector('body').style.overflow = "hidden"
    } else {
        document.querySelector('body').style.overflow = "auto"
    }
    return (
        <aside className={`${classes}menu-aside`}>
            <nav className="menu__nav">
                <div className="close-box">
                    <div className="close-btn" onClick={toggleDirectoryHidden}>
                        <BsX className="close-icon" />
                        <span>CLOSE</span>
                    </div>
                </div>

                <div className="menu__group">
                    <h6 className="menu__group-header">Sale</h6>
                    <ul>
                        <li>
                            sale men
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}
const mapStateToProps = (state) => ({
    cartHidden: selectCartHidden(state),
    filterSorterHidden: selectFilterSorterHidden(state)
})

const mapDispatchToProps = dispatch => ({
    toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuAside)
