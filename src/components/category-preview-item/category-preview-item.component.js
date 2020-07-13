import React from 'react'
import { Link } from 'react-router-dom'
import './category-preview-item.styles.scss'

const CategoryPreviewItem = ({ link, imgUrl, name, onClick }) => {
    return (
        <div className="category-item">
            <div className="category-item__rotation">
                <Link to={link} onClick={onClick}>
                    <figure className="category-item__figure">
                        <img className="photo" src={imgUrl} alt="" />
                        <figcaption className="name">{name}</figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default CategoryPreviewItem
