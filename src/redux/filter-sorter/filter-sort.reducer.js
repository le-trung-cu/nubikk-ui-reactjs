import FilterSorterActionTypes from './filer-sorter.types';

const INITIAL_STATE = {
    hidden: true,
    params: { colorIds: [], materialIds: [], categoryIds: [], modelIds: [], sizes: [], priceRange: [] },
    filterSorterMap: { categories: [], models: [], priceRange: [], colors: [], sizes: [] }
};

const filterSorterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterSorterActionTypes.TOGGLE_FILTER_SORTER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case FilterSorterActionTypes.CLEAR_FILTER_SORTER:
            return {
                ...state,
                params: { colorIds: [], materialIds: [], categoryIds: [], modelIds: [], sizes: [], priceRange: [] }
            };
        case FilterSorterActionTypes.CHANGE_FILTER_SORTER:
            return {
                ...state,
                params: action.payload
            };
        case FilterSorterActionTypes.FETCH_FILTER_SORTER_MAP:
            return {
                ...state,
                filterSorterMap: action.payload
            }
        default:
            return state;
    }
};

export default filterSorterReducer;