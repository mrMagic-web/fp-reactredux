export function selectProduct(product) {
    // selectProduct is an ActionCreator, it needs to return an action
    // action is an object with a type property
    // It always contain a type and sometimes contains a payload
    
    return {
        type: 'PRODUCT_SELECTED', 
        payload: product
    };
}
export function overProduct(product) {
	return {
		type: 'PRODUCT_OVER', 
        payload: product	
	}
}