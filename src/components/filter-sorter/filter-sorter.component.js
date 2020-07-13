import React from 'react'
import FilterSortItemCollapse from '../filter-sort-item-collapse/filter-sort-item-collapse.component'
import { connect } from 'react-redux'
import { changeFilterSorter } from '../../redux/filter-sorter/filter-sorter.actions'
import { useHistory } from 'react-router-dom'

import { setCollectionItems } from '../../redux/shop-collection/shop-collection.actions'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

import './filter-sorter.styles.scss'

const FilterSorter = ({ filterSorterMap, countCollectionItems, filterSorterParams, changeFilterSorter }) => {
    console.log("FilterSorter filterSorterParams", filterSorterParams)

    const handleInputChange = ({ name, value }) => {
        const query = { ...filterSorterParams }
        if (query[name]) {
            let index = query[name].indexOf(value);
            if (index !== -1) {
                query[name].splice(index, 1);
            } else {
                query[name].push(value);
            }
        } else {
            query[name] = [value];
        }

        changeFilterSorter(query);
    }

    return (
        <div className="filter-sorter">
            <form action="">
                <FilterSortItemCollapse name="colors" >
                    {
                        filterSorterMap.colors.map(({ colorId, colorName }) => {
                            colorId += '';
                            const checked = filterSorterParams?.colorIds?.includes(colorId) ?? false;
                            return (
                                <label key={colorId}>
                                    <input type="checkbox" name={colorName} checked={checked}
                                        value={String(colorId)}
                                        onChange={() => handleInputChange({ name: 'colorIds', value: colorId })} />
                                    {colorName}
                                </label>
                            )
                        })
                    }
                </FilterSortItemCollapse>
                <FilterSortItemCollapse name="materials">
                    {
                        filterSorterMap.materials?.map(({ materialId, materialName }) => {
                            materialId += '';
                            const checked = filterSorterParams?.materialIds?.includes(materialId) ?? false;
                            return (
                                <label key={materialId}>
                                    <input type="checkbox" name={materialName} checked={checked}
                                        value={String(materialId)}
                                        onChange={() => handleInputChange({ name: 'materialIds', value: materialId })} />
                                    {materialName}
                                </label>
                            )
                        })
                    }
                </FilterSortItemCollapse>

                <FilterSortItemCollapse name="categories">
                    {
                        filterSorterMap.categories?.map(({ categoryId, categoryName }) => {
                            categoryId += '';
                            const checked = filterSorterParams?.categoryIds?.includes(categoryId + '') ?? false;
                            return (
                                <label key={categoryId}>
                                    <input type="checkbox" name={categoryName} checked={checked}
                                        value={String(categoryId)}
                                        onChange={() => handleInputChange({ name: 'categoryIds', value: categoryId })} />
                                    {categoryName}
                                </label>
                            )
                        })
                    }
                </FilterSortItemCollapse>

                <FilterSortItemCollapse name="models">
                    {
                        filterSorterMap.models?.map(({ modelId, modelName }) => {
                            modelId += '';
                            const checked = filterSorterParams?.modelIds?.includes(modelId + '') ?? false;
                            return (
                                <label key={modelId}>
                                    <input type="checkbox" name={modelName} checked={checked}
                                        value={String(modelId)}
                                        onChange={() => handleInputChange({ name: 'modelIds', value: modelId })} />
                                    {modelName}
                                </label>
                            )
                        })
                    }
                </FilterSortItemCollapse>

                <FilterSortItemCollapse name="sizes">
                    {
                        filterSorterMap.sizes?.map(({ sizeName }) => {
                            sizeName += '';
                            // const checked = filterSorterParams?.sizes?.findIndex(v => v == sizeName) > -1 ? true : false
                            const checked = filterSorterParams?.sizes?.includes(sizeName) ?? false;
                            return (
                                <label key={sizeName}>
                                    <input type="checkbox" name={sizeName} checked={checked}
                                        value={String(sizeName)}
                                        onChange={() => handleInputChange({ name: 'sizes', value: sizeName })} />
                                    {sizeName}
                                </label>
                            )
                        })
                    }
                </FilterSortItemCollapse>

                {/* <InputRange
                    maxValue={item.maxValue}
                    minValue={item.minValue}
                    formatLabel={value => `${value} $`}
                    value={!!filterSorterParams[item.name]?.length ?
                        { min: filterSorterParams[item.name][0], max: filterSorterParams[item.name][1] }
                        : { min: item.minValue, max: item.maxValue }}
                    onChange={value => handleInputChange(item, value)} /> */}

                <div className="btn count-collection-item">{countCollectionItems} Products</div>
            </form>
        </div >
    )
}

const mapStateToProps = state => ({
    filterSorterParams: state.filterSorter.params,
    // filtersMap: selectFilters(state),
    // filtersTypeMap: selectFiltersTypeMap(state),
    filterSorterMap: state.filterSorter.filterSorterMap,
    countCollectionItems: state.shopCollection.collectionItems.length,
})

const mapDispatchToProps = dispatch => ({
    changeFilterSorter: (value) => dispatch(changeFilterSorter(value)),
    setCollectionItems: (items) => dispatch(setCollectionItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSorter)
// export default FilterSorter
