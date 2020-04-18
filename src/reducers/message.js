import * as types from './../constants/ActionType';

const initialState = '';
const message = (state = initialState, action) => {
    switch(action.type){
        case(types.ADD_TO_CART):
            state = action.message;
            return state;

        case(types.DELETE_ITEM_IN_CART):
            state = action.message;
            return state;

        case(types.INCREASE_QUANTITY_CART):
            state = action.message;
            return state;

        case(types.DECREASE_QUANTITY_CART):
            state = action.message;
            return state;

        case(types.CHECKOUT_PAYMENT):
            state = action.message;
            return state;

        case(types.EMPTY_CART):
            state = action.message;
            return state;
            
        default: return state;
    }
}
export default message;