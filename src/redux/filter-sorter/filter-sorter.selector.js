import { createSelector } from 'reselect'

const selectFilterSorter = state => state.filterSorter;

export const selectFilterSorterHidden = createSelector(
    [selectFilterSorter],
    filterSorter => filterSorter.hidden
)

export const selectFilterSorterParams = createSelector(
    [selectFilterSorter],
    filterSorter => filterSorter.params
)



export const selectSearchFromFilterSorterParams = createSelector(
    [selectFilterSorterParams],
    params => getSearchString(params)
)

export const selectFilterSorterMap = createSelector(
    [selectFilterSorter],
    filterSorter => filterSorter.filterSorterMap
)

const getSearchString = (filterSorterParams) => {
    let search = '?';
    for (let x in filterSorterParams) {
        if (!!filterSorterParams[x].length) {
            if (search !== '?')
                search += '&';
            search += x + '=';
            search += filterSorterParams[x]?.join(',') ?? '';
        }
    }
    console.log(search)
    return search
}