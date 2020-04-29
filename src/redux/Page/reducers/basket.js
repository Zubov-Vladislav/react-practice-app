import {COUNT_PURCHASES_START, COUNT_PURCHASES_SUCCESS, COUNT_PURCHASES_ERROR} from '../actions/actionTypes'

const initialState = {
    sumBasket: 0,
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case COUNT_PURCHASES_START:
            return {
                ...state
            };
            case COUNT_PURCHASES_SUCCESS:
                return {
                    ...state, sumBasket: sumBasket + 1
                };
                case COUNT_PURCHASES_ERROR:
                    return {
                        ...state
                    }    
        default:
            return state
    }
}