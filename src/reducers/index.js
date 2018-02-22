import { combineReducers } from 'redux';
import ProductReducer from './reducer_products';
import ProductSelectedReducer from './reducer_products_selected';
//import PageElementsReducer from './reducer_page_elements';
import CategoriesReducer from './reducer_product_categories';

const rootReducer = combineReducers({
    products: ProductReducer,
    activeProduct: ProductSelectedReducer,
    categories: CategoriesReducer
//    pageElements: PageElementsReducer
});

export default rootReducer;
