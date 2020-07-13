import React from 'react'
import { toggleFilterSorterHidden, fetchFilterSorterMap } from '../../redux/filter-sorter/filter-sorter.actions';
import { connect } from 'react-redux';

import { FaSlidersH } from 'react-icons/fa'

import './filter-sorter-icon.styles.scss'
import { useEffect } from 'react';
import { fetchFilterSorter } from '../../services/redirect.services';
import { useParams } from 'react-router-dom';

const FilterSorterIcon = ({ toggleHidden, fetchFilterSorterMap }) => {
    const { sex, category } = useParams();

    useEffect(() => {
        window.timeOutIdFilterSorter = setTimeout(() => {
            fetchFilterSorter({ sex, categoryName: category })
                .then(filterSorterMap => {
                    console.log(filterSorterMap)
                    fetchFilterSorterMap(filterSorterMap)
                });
        }, 3000);

        return () => {
            clearTimeout(window.timeOutIdFilterSorter);
        }
    }, [fetchFilterSorterMap])

    return (
        <div style={{ textAlign: 'right' }}>
            <span className="filter-sorter-icon" onClick={toggleHidden}>
                <FaSlidersH />
                <span>Filter & Sortering</span>
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleFilterSorterHidden()),
    fetchFilterSorterMap: (filterSorterMap) => dispatch(fetchFilterSorterMap(filterSorterMap))
})

export default connect(null, mapDispatchToProps)(FilterSorterIcon)
