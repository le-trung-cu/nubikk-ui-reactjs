import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import './filter-sort-item-collapse.styles.scss'
import { useState } from 'react'
const FilterSortItemCollapse = ({ name, children }) => {
    const [explain, setExplain] = useState(false)
    return (
        <div className="filter-sort-item-collapse">
            <div className="filter-sort-item-collapse__header" onClick={() => setExplain(!explain)}>
                <h6 className="title">{name}</h6>
                <BsChevronRight className={explain ? 'explain arrow-icon' : 'collapse arrow-icon'} />
            </div>
            {explain ?
                <div className="content">
                    {children}
                </div>
                : null
            }
        </div>
    )
}

export default FilterSortItemCollapse
