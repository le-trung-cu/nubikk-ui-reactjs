import React from 'react'
import CollectionItem from '../collection-overview-item/collection-item.component'

import './collection-overview.styles.scss'

const CollectionOverview = ({ title, items }) => {
    return (
        <section className="collection-overview">
            <div className="collection__list">
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </section>
    )
}

export default CollectionOverview
