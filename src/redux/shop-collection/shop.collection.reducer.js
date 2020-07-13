import ShopCollectionActionTypes from './shop-collection.types';


const INITIAL_STATE = {
    collectionItems: []
};

const shopCollectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopCollectionActionTypes.SET_COLLECTIONS:
            return {
                ...state,
                collectionItems: action.payload
            };
        default:
            return state;
    }
};

export default shopCollectionReducer;