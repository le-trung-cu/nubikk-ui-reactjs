import React from 'react'
import HeaderImage from '../../components/header-image/header-image.component'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="home-page">
            <HeaderImage imgUrl="./img/shop-01_1920x1920.jpg" height="80vh">
                <div className="btn-group-vertical">
                    <Link className="btn btn--header text-black" to="/men-home">SHOP MEN</Link>
                    <Link className="btn btn--header text-black" to="/women-home">SHOP WOMEN</Link>
                </div>
            </HeaderImage>
        </div>
    )
}

export default HomePage
