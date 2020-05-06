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
  products: [{
    id:13,
    quantity: 1
  },
  {
    id:14,
    quantity: 1
  }]
}


export function getProductId(globalState, id) {
  return globalState.products.list.find(products => products.id == id);
}



export function reducer(state = initialState, action) {
  switch (action.type) {
    
        
              case 'ADD_PRODUCT_TO_CART': {
                const adding_product = state.product.findIndex(products => products.id == action.id)
                if(adding_product === -1) {
                return {
                  ...state,
                  products:  [...state.products, {id:action.id, quantity: 1}]
                }
              }
              }
              case 'COUNT_PURCHASES_PLUS':{
          
 
                const foundedProductIndex = state.products.findIndex(products => products.id == action.id);
                const newCart = [...state.products]; 
                newCart.splice(foundedProductIndex, 1, {
                  ...state.products[foundedProductIndex],
                  quantity: state.products[foundedProductIndex].quantity + 1
                })
                console.log(foundedProductIndex)
              return {
               
                  ...state,
                  products: newCart,
                 
              };
            }
              case 'COUNT_PURCHASES_MINUS':{
         
                const foundedProductInd = state.products.findIndex(products => products.id == action.id);
               
                if (state.products[foundedProductInd].quantity != 1){
            
                  const newCartt = [...state.products];
                  newCartt.splice(foundedProductInd, 1, {
                    ...state.products[foundedProductInd],
                    quantity: state.products[foundedProductInd].quantity - 1
                  })
                  return {
               
                    ...state,
                    products: newCartt,
                   
                };
              } 
            }
                case 'DELETE_TO_CART': {
        
                const foundedProductInd = state.products.findIndex(products => products.id == action.id);
                const newCart = [...state.products];
                newCart.splice(foundedProductInd, 1)
                return {
               
                  ...state,
                  products: newCart,
                 
              };
                }
              
             
              
            
          default:
          return state
  
}
}
