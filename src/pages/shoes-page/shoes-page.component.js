import React, { useEffect } from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import FilterSorterIcon from '../../components/fiter-sorter-icon/filter-sorter-icon.component'
import { fetchProducts } from '../../services/product.sevices'
import { connect } from 'react-redux'
import { setCollectionItems } from '../../redux/shop-collection/shop-collection.actions'
import { useHistory, useParams } from 'react-router-dom'
import qs from 'query-string'
import './shoes-page.styles.scss'
import { changeFilterSorter, clearFilterSorter } from '../../redux/filter-sorter/filter-sorter.actions'

const ShoesPage = ({ changeFilterSorter, clearFilterSorter, collectionItems,
    setCollectionItems, filterSorterParams }) => {
    const history = useHistory();
    const params = useParams();

    const getFilterSorterParams = () => {
        let searchString = history.location.search;

        const filterSorterParams = qs.parse(searchString, { ignoreQueryPrefix: true })
        console.log("filterSorterParams search", filterSorterParams)

        for (let filterItemName in filterSorterParams) {
            if (filterItemName === 'priceRange') {
                filterSorterParams[filterItemName] = filterSorterParams[filterItemName]?.split(':').map(s => parseInt(s.trim()));
            } else {
                filterSorterParams[filterItemName] = filterSorterParams[filterItemName]?.split(',').map(s => s.trim());
            }
        }
        console.log("filterSorterParams", filterSorterParams)
        return filterSorterParams
    }

    useEffect(() => {
        const filterSorterParams = getFilterSorterParams()
        console.log('getFilterSorterParams...', filterSorterParams)
        changeFilterSorter(filterSorterParams)
    }, [])

    const getSearchString = (filterSorterParams) => {
        let search = '?';
        for (let filterItemName in filterSorterParams) {
            if (!!filterSorterParams[filterItemName].length) {
                if (search !== '?')
                    search += '&';
                search += filterItemName + '=';
                // let y = filters.find(f => f.name === filterItemName);
                console.log(filterItemName)
                if (filterItemName !== 'priceRange') {
                    search += filterSorterParams[filterItemName]?.join(',') ?? '';
                } else {
                    search += filterSorterParams[filterItemName]?.join(':') ?? '';
                }
            }
        }
        return search === '?' ? '' : search;
    }
    useEffect(() => {
        const search = getSearchString(filterSorterParams);
        history.replace(history.location.pathname + search)
    }, [filterSorterParams])

    useEffect(() => {
        clearTimeout(window.timeOutIdfetchProducts);

        const search = getSearchString(filterSorterParams);

        console.log('history.location.search', '..' + history.location.search + '..');
        console.log('search', '..' + search + '..');

        if (history.location.search !== search) {

            changeFilterSorter(getFilterSorterParams())
            // clearFilterSorter();
        }
        window.timeOutIdfetchProducts = setTimeout(() => {
            const { sex, category } = params;
            fetchProducts({ sex, category, search }).then(data => {
                setCollectionItems(data)
            })
        }, 500);

        return () => {
            clearTimeout(window.timeOutIdfetchProducts);
        }
    }, [params])

    return (
        <section className="shoes-page">
            <FilterSorterIcon />
            <CollectionOverview
                title="collections.title" items={collectionItems}
            />
        </section>
    )

}

const mapStateToProps = state => ({
    filterSorterParams: state.filterSorter.params,
    collectionItems: state.shopCollection.collectionItems
})

const mapDispatchToProps = dispatch => ({
    changeFilterSorter: (value) => dispatch(changeFilterSorter(value)),
    setCollectionItems: (items) => dispatch(setCollectionItems(items)),
    clearFilterSorter: () => dispatch(clearFilterSorter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoesPage)
