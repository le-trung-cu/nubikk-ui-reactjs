import FilterSorterActionTypes from './filer-sorter.types';

export const toggleFilterSorterHidden = () => ({
    type: FilterSorterActionTypes.TOGGLE_FILTER_SORTER_HIDDEN
});

export const fetchFilterSorterMap = filterSorterMap => ({
    type: FilterSorterActionTypes.FETCH_FILTER_SORTER_MAP,
    payload: filterSorterMap
})

export const changeFilterSorter = filterSort => ({
    type: FilterSorterActionTypes.CHANGE_FILTER_SORTER,
    payload: filterSort
});



export const clearFilterSorter = () => ({
    type: FilterSorterActionTypes.CLEAR_FILTER_SORTER,
});