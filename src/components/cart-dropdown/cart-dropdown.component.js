import React, { Fragment } from 'react'
import './cart-dropdown.styles.scss'
import { selectCartItems, selectCartTotal, selectCartItemsCount } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import Button from '../button/button.component'

const CartDropdown = ({ cartItems, cartTotal, toggleCartHidden, cartItemsCount }) => {
    const history = useHistory()

    return (
        <div className={`cart-dropdown`}>
            <div style={{ height: 1000 }}>
                {cartItemsCount > 0 ?
                    <Fragment>
                        {cartItems?.map(item => <CartItem key={item.id} item={item} />)}
                        <div className="cart-dropdown__total">
                            <span>Total:</span>
                            <span>€ {cartTotal}</span>
                        </div>
                        <div>
                            <Button className="btn btn--main btn--background" onClick={() => {
                                toggleCartHidden()
                                history.push('/checkout')
                            }}>checkout</Button>
                        </div>
                    </Fragment>
                    : <div>
                        <Button className="btn btn--main btn--background cart-empty-message" onClick={() => {
                            toggleCartHidden()
                        }}>Cart is empty continue shopping</Button>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartItemsCount: selectCartItemsCount(state),
    cartTotal: selectCartTotal(state)
})

const mapDispatchToProps = dispath => ({
    toggleCartHidden: () => dispath(toggleCartHidden()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
