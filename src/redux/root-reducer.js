import { combineReducers } from 'redux'
import directoryReducer from './directory/directory.reducer'
import cartReducer from './cart/cart.reducer'
import filterSorterReducer from './filter-sorter/filter-sort.reducer';
import shopCollectionReducer from './shop-collection/shop.collection.reducer';
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
    directory: directoryReducer,
    cart: cartReducer,
    filterSorter: filterSorterReducer,
    shopCollection: shopCollectionReducer,
    user: userReducer
});

export default rootReducer;