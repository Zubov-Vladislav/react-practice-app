export function сountPurchases(sumBasket) {
  return {
    type: "COUNT_PURCHASES_SUCCESS",
    sumBasket,
  };
}
//вынести в экшены

export function deleteFromCart(id) {
  return{
  type: "DELETE_TO_CART",
  id
  }
}

export function addProductToCart(id) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    id
  }
}

export function сountPurchasesPlus(id) {
  return{
  type: "COUNT_PURCHASES_PLUS",
  id
  }
}

export function сountPurchasesMinus(id) {
  return{
  type: "COUNT_PURCHASES_MINUS",
  id
  }
}


const initialState = {
  products: []
}


export function getProductId(globalState, productId) {
  return
    globalState.products.list.find(product => product.id ==productId);
}






export function reducer(state = initialState, action) {
  switch (action.type) {
    
          case 'COUNT_PURCHASES_SUCCESS':
              return {
                  ...state, sumBasket: state.sumBasket + action.sumBasket
              };
              case 'COUNT_PURCHASES_PLUS':
                const foundedProductIndex = state.products.findIndex(product => product.id == action.productId);
                const newCart = [...state.products].splice(foundedProductIndex, 1, {
                  ...state.products[foundedProductIndex],
                  quantity: state.products[foundedProductIndex].quantity + 1
                })
                console.log(foundedProductIndex)
              return {
               
                  ...state,
                  products: newCart,
                 
              };
              case 'COUNT_PURCHASES_MINUS':
                const foundedProductInd = state.products.findIndex(product => product.id == action.productId);
                if (state.products[foundedProductInd].quantity != 0){
            
                  const newCartt = [...state.products].splice(foundedProductInd, 1, {
                    ...state.products[foundedProductInd],
                    quantity: state.products[foundedProductInd].quantity - 1
                  })
                  return {
               
                    ...state,
                    products: newCartt,
                   
                };

                } 
                case 'DELETE_TO_CART': {
                const foundedProductInd = state.products.findIndex(product => product.id == action.productId);
                const newCart = [...state.products].splice(foundedProductInd, 1)
                return {
               
                  ...state,
                  products: newCart,
                 
              };
                }
              case 'ADD_PRODUCT_TO_CART': {
                return {
                  ...state,
                  product:  [...state.product, action.id]
                }
              }
             
            
            
          default:
          return state
  
}
}
