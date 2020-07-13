import React from 'react'
import './collection-item.styles.scss'
import CollectionSize from '../collection-size/collection-size.component';

const CollectionItem = ({ item }) => {
    const { picture, price, label, name, sizes } = item

    return (
        <div className="collection collection__wrap">
            <div className="collection__box">
                <div className="card">
                    <div className="card__photo-box">
                        <img src={picture} alt="" />
                        {label ? <div className="label">{label}</div> : null}
                    </div>
                    <div className="detail">
                        <h4 className="name">{name}</h4>
                        <span className="price">€{price}</span>
                    </div>
                    <CollectionSize sizes={sizes} item={item} />
                </div>
            </div>
        </div>

    )
}

export default CollectionItem
