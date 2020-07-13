import React from 'react'
import { connect } from 'react-redux'

import './collection-size.styles.scss'

import { addItem } from '../../redux/cart/cart.actions'
import { addItemToBasketService } from '../../services/basket.services'
import userServices from '../../services/user.services'

const CollectionSize = ({ sizes, item, addItem }) => {
    console.log(item)
    const addToCart = (size) => {
        if (userServices.user) {
            addItemToBasketService({
                productId: item.id,
                colorName: item.colorName,
                size
            }).then(data => {
                console.log(data)
                addItem(data)
            })
        } else {
            addItem({ ...item, size, id: `${item.id}_size_${size}`, productId: item.id, colorName: item.colorName })
        }
    }

    return (
        <ul className="collection-size">
            {
                sizes.map(({ name, status }) =>
                    <li key={name}>
                        <button disabled={!status} className={status ? "in-of" : "out-of"}
                            onClick={() => { addToCart(name) }}>
                            {name}
                        </button>
                    </li>)
            }
        </ul>
    )
}

const mapDitchPathToProps = dispath => ({
    addItem: (item) => dispath(addItem(item)),
})

export default connect(null, mapDitchPathToProps)(CollectionSize)