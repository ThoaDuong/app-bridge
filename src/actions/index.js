import * as types from './../constants/ActionType';
import callApi from './../utils/callApi';

export const actFetchAllProduct = (products) => {
    return {
        type: types.FETCH_ALL_PRODUCT,
        products
    }
}
export const actFetchAllProductRequest = () => {
    return (dispatch) => {
        return callApi('https://5e68a3fcd426c00016b7e245.mockapi.io/api/products', 'GET', null).then(res => {
            dispatch(actFetchAllProduct(res.data));
        })
    }
}
export const actGetAllCart = () => {
    return {
        type: types.GET_ALL_CART
    }
}
export const actAddToCart = (cart, message) => {
    return {
        type: types.ADD_TO_CART,
        cart, 
        message
    }
}
export const actDeleteItemInCart = (cart, message) => {
    return {
        type: types.DELETE_ITEM_IN_CART,
        cart,
        message
    }
}
export const actIncreaseQuantityCart = (cart, message) => {
    return {
        type: types.INCREASE_QUANTITY_CART,
        cart,
        message
    }
}
export const actDecreaseQuantityCart = (cart, message) => {
    return {
        type: types.DECREASE_QUANTITY_CART,
        cart,
        message
    }
}
export const actCheckEmptyCart = (message) => {
    return {
        type: types.EMPTY_CART,
        message
    }
}
export const actCheckoutPayment = (message) => {
    return {
        type: types.CHECKOUT_PAYMENT,
        message
    }
}
