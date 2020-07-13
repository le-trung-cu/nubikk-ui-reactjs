import ShopCollectionActionTypes from './shop-collection.types';

export const setCollectionItems = (items) => ({
    type: ShopCollectionActionTypes.SET_COLLECTIONS,
    payload: items
});
