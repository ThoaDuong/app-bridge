import * as types from './../constants/ActionType';

const data = JSON.parse(localStorage.getItem('carts'));
const initialState = data ? data : [];
const carts = (state = initialState, action) => {
    var index = -1;
    var actID = '';
    switch(action.type){
        case (types.GET_ALL_CART):
            return [...state];

        case (types.ADD_TO_CART):
            actID = action.cart.product.id;
            index = findIndex(state, actID);
            if(index !== -1){
                state[index].quantity += 1;
            }else{
                state.push(action.cart);
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];

        case (types.DELETE_ITEM_IN_CART):
            actID = action.cart.product.id;
            index = findIndex(state, actID);
            state.splice(index, 1);
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];

        case (types.INCREASE_QUANTITY_CART):
            actID = action.cart.product.id;
            index = findIndex(state, actID);
            state[index].quantity += 1;
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];

        case (types.DECREASE_QUANTITY_CART):
            actID = action.cart.product.id;
            index = findIndex(state, actID);
            if(state[index].quantity === 1){
                state.splice(index, 1);
            }
            else{
                state[index].quantity -= 1;
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];

        case (types.CHECKOUT_PAYMENT):
            state = [];
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}
var findIndex = (carts, id) => {
    var result = -1;
    if(carts.length > 0 && id){
        for(var i=0; i<carts.length; i++){
            if(carts[i].product.id.toString() === id){
                result = i;
                break
            }
        }
    }
    return result;
}
export default carts;