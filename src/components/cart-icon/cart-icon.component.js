import React from 'react'
import { BsBag } from 'react-icons/bs'
import { selectCartItemsCount, selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden, addItem, clearCart } from '../../redux/cart/cart.actions'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import './cart-icon.styles.scss'
import { fetchBasketService, createBasket } from '../../services/basket.services'

const CartIcon = ({ user, itemCount, toggleCartHidden, addItem, clearCart, items }) => {

    useEffect(() => {
        if (user) {
            if (itemCount > 0) {
                createBasket(items).then(({ items }) => {
                    clearCart();
                    items.forEach(item => addItem(item))
                }).catch(error => console.log('error ', error));
            } else {
                fetchBasketService().then(({ items }) => {
                    items.forEach(item => {
                        addItem(item)
                    })
                }).catch(error => console.log('error ', error))
            }
        }
    }, [user]);

    return (
        <span className="cart-icon" onClick={toggleCartHidden}>
            <BsBag />
            <div className="cart-icon__count">{itemCount}</div>
        </span>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state),
    items: selectCartItems(state),
    user: state.user.user
})


const mapDispatchToProps = dispath => ({
    toggleCartHidden: () => dispath(toggleCartHidden()),
    addItem: (item) => dispath(addItem(item)),
    clearCart: () => dispath(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
