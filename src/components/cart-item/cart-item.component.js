import React from 'react'
import './cart-item.component.scss'
import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { clearBasketItemService, setQuantityToBasketItemService } from '../../services/basket.services'
import { toast } from 'react-toastify'

const CartItem = ({ item, addItem, removeItem, clearItemFromCart }) => {

    const clearBasketItem = (item) => {
        clearBasketItemService(item.id)
            .then(() => clearItemFromCart(item))
            .catch((e) => console.log(e))
    }

    const addBasketItem = (item) => {
        if (window.timeOutIdAddBasketItem)
            clearTimeout(window.timeOutIdAddBasketItem);

        addItem(item);
        window.timeOutIdAddBasketItem = setTimeout(() => {
            setQuantityToBasketItemService({
                basketItemId: item.id,
                quantity: item.quantity + 1,
            }).then(res => {
                if (res.ok) {
                    toast.success('cart item updated')
                }
            }).catch(error => {
                console.log(error)
            })
        }, 700)
    }

    const removeBasketItem = (item) => {
        if (window.timeOutIdRemoveBasketItem)
            clearTimeout(window.timeOutIdRemoveBasketItem);

        removeItem(item);
        window.timeOutIdRemoveBasketItem = setTimeout(() => {
            setQuantityToBasketItemService({
                basketItemId: item.id,
                quantity: item.quantity - 1,
            }).then(res => {
                console.log(res)
                if (res.ok) {
                    toast.success('cart item updated')
                }
            }).catch(error => {
                toast.error(`error update cart item`)
            });
        }, 700);
    }

    const { picture, quantity, price, size, colorName, name } = item
    return (
        <div className="cart-item">
            <div className="cart-item__thumbnail-contain">
                <img className="cart-item__thumbnail-image" src={picture} alt="" />
            </div>
            <div className="cart-item__detail">
                <span className="cart-item__name">{name}</span>
                <span className="cart-item__cofiguration">
                    <i>color: </i><span className="cart-item__color">{colorName}</span>
                    <i> size: </i><span className="cart-item__size">{size}</span>
                </span>
                <div className="cart-item__end">
                    <span className="cart-item__quantity">{quantity}X |</span>
                    <span className="cart-item__delete"
                        onClick={() => clearBasketItem(item)}>delete
                    </span>
                    <span className="cart-item__price">€ {price}</span>
                </div>
                <div className="cart-item__end">
                    <span className="cart-item__add-remove"
                        onClick={() => removeBasketItem(item)}>-</span>
                    <span className="cart-item__add-remove"
                        onClick={() => addBasketItem(item)}>+</span>
                    <span className="cart-item__total-price">€ {quantity * price}</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem)
