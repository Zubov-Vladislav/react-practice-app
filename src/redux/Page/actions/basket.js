import {COUNT_PURCHASES_START, COUNT_PURCHASES_SUCCESS, COUNT_PURCHASES_ERROR} from './actionTypes'

export function CountPurchases() {
    return async dispatch => {
        dispatch(CountPurchasesStart())
        dispatch(CountPurchasesSuccess())
        dispatch(CountPurchasesError())
    }
}

export function CountPurchasesStart() {
    return {
        type: COUNT_PURCHASES_START
    }
}

export function CountPurchasesSuccess(params) {
    return {
        type: COUNT_PURCHASES_SUCCESS,
        sumBasket: sumBasket + 1
    }
}

export function CountPurchasesError(params) {
    return {
        type: COUNT_PURCHASES_ERROR
    }
}