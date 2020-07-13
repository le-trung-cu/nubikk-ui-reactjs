import React from 'react'
import './header-image.styles.scss'

const HeaderImage = ({ imgUrl, children, height }) => {
    let styles = {
        backgroundImage: `url(${imgUrl})`,
        height
    }
    return (
        <section style={styles} className="header-image">
            <div className="header-image__context">
                {children}
            </div>
        </section>
    )
}

export default HeaderImage
