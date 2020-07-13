import React, { useRef } from 'react'
import CategoryPreviewItem from '../category-preview-item/category-preview-item.component'
import Flicking from "@egjs/react-flicking";

import './category-preview.styles.scss';
import { useHistory } from 'react-router-dom';

const CategoryPreview = ({ title, items = [], sex }) => {
    const flicking = useRef();

    console.log("CategoryPreview", items);
    return (
        <div className="category-preview">
            <div className="contain">
                <h3 className="category-preview__title">{title}</h3>
                <Flicking ref={flicking} className="flicking flicking1" bound={false}
                    hanger={"0"} anchor={"0"} autoResize={true} >
                    {
                        items?.map((item, index) =>
                            <CategoryPreviewItem
                                key={index}
                                imgUrl={item.imgUrl}
                                name={item.title}
                                link={`/${sex}/${item.name}`}
                                onClick={(e) => {
                                    if (flicking.current.isPlaying()) {
                                        // history.push(`/${sex}/${item.name}`);
                                        e.preventDefault();
                                    }
                                }} />)
                    }
                </Flicking>
            </div>
        </div>
    )
}

export default CategoryPreview
