export function сountPurchases(sumBasket) {
  return{
  type: "COUNT_PURCHASES_SUCCESS",
  sumBasket
  }
}

const initialState = {
  sumBasket: 0,
}





export function reducer(state = initialState, action) {
  switch (action.type) {
          case 'COUNT_PURCHASES_SUCCESS': 
          console.log(state)
              return {
                  ...state, sumBasket: state.sumBasket + action.sumBasket
              };  

      default:
          return state
  }
}

