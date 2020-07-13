import React from 'react'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import FilterSorter from '../filter-sorter/filter-sorter.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { BsX } from 'react-icons/bs'
import { connect } from 'react-redux';
import { toggleFilterSorterHidden } from '../../redux/filter-sorter/filter-sorter.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectFilterSorterHidden } from '../../redux/filter-sorter/filter-sorter.selector';

import './cart-filter-sorter-aside.styles.scss'

const CartFilterSortAside = ({ cartHidden, filerSorterHidden, toggleCartHidden, toggleFilterSorterHidden }) => {
    return (
        <aside className="cart-filter-sort-aside">
            <div className="cart-filter-sort-aside__content">
                <div className="close-box">
                    <div className="close-btn"
                        onClick={() => {
                            if (!cartHidden)
                                toggleCartHidden()
                            if (!filerSorterHidden)
                                toggleFilterSorterHidden()
                        }}>
                        <BsX className="close-icon" />
                        <span>CLOSE</span>
                    </div>
                </div>
                {cartHidden ? null : <CartDropdown />}
                {filerSorterHidden ? null : <FilterSorter />}
            </div>
        </aside>
    )
}

const mapStateToProps = state => ({
    cartHidden: selectCartHidden(state),
    filerSorterHidden: selectFilterSorterHidden(state)
})


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    toggleFilterSorterHidden: () => dispatch(toggleFilterSorterHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartFilterSortAside)
