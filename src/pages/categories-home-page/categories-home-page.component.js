import React, { useState } from 'react'
import HeaderImage from '../../components/header-image/header-image.component'
import { Link } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useEffect } from 'react';
import { fetchCategories } from '../../services/redirect.services';

const categoriesMapImages = {
    "men": {
        "sneakers": "https://cdn.dutchdrops.com/nubikk/media/image/48/cd/86/sneakers_heren_600_900_800x800.jpg",
        "trainers": "https://cdn.dutchdrops.com/nubikk/media/image/3c/22/9c/lucy_view_alll86ZbqozoQ0ow_800x800.jpg",
        "boots": "https://cdn.dutchdrops.com/nubikk/media/image/24/3d/0a/NUBIKK-MANCHESTER-AW19-LOGANHARBOR-BLACKLEATHER-38z4blXKgt5nwz_800x800.jpg",
        "espadrilles": "https://cdn.dutchdrops.com/nubikk/media/image/f2/cc/64/NUBIKK-MANCHESTER-AW19-LOGANIVY-BLACKLEATHER-2upwQSBpacDRfv_800x800.jpg",
        "view all": "https://cdn.dutchdrops.com/nubikk/media/image/3c/22/9c/lucy_view_alll86ZbqozoQ0ow_800x800.jpg"
    },
    "women": {
        "sneakers": "https://cdn.dutchdrops.com/nubikk/media/image/7a/d7/4f/ankle-boots_800x800.jpg",
        "trainers": "https://cdn.dutchdrops.com/nubikk/media/image/3c/22/9c/lucy_view_alll86ZbqozoQ0ow_800x800.jpg",
        "boots": "https://cdn.dutchdrops.com/nubikk/media/image/8b/a2/90/boots_women_catogehIWtxjcjSyLf_800x800.jpg",
        "sandals": "https://cdn.dutchdrops.com/nubikk/media/image/73/80/6b/lauren-black_800x800.jpg",
        "view all": "https://cdn.dutchdrops.com/nubikk/media/image/3c/22/9c/lucy_view_alll86ZbqozoQ0ow_800x800.jpg"
    }
}

const CategoriesHomePage = ({ sex }) => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        window.timeOutIdFetchCategories = setTimeout(() => {
            fetchCategories({ sex }).then(data => {
                console.log(data, '............')
                data.push({ name: "", title: "view all" })
                data.forEach(category => {
                    category.imgUrl = categoriesMapImages[sex][category.title];
                })
                setCategories(data)
            })
        }, 500);

        return () => {
            console.log('window.timeOutIdFetchCategories')
            clearTimeout(window.timeOutIdFetchCategories)
        }

    }, [sex])

    return (
        <div className="men-home-page">
            <HeaderImage height="354px" imgUrl="/img/MEN-BANNER-1280x1280.jpg">
                <h2>MEN</h2>
                <Link to="/men">SHOP NEW</Link>
            </HeaderImage>
            <CategoryPreview sex={sex} title="shop by category" items={categories} />
        </div>
    )
}

export default CategoriesHomePage
