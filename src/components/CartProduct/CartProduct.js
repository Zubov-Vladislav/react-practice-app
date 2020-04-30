import React from "react";
import classes from "./CartProduct.module.css";
import ButtonSum from "../UI/ButtonSum/ButtonSum";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";


 const CartProduct = ({product, deleteBasketToCart, productQuantityIncrement, productQuantityDecrement } ) => {


  
  const deleteProductFromCart = () => {
    deleteBasketToCart(product.id)
    
  }

  const CountNumPlus = () => {
    productQuantityIncrement(product.id)
    
  }

  const CountNumMinus = () => {
    productQuantityDecrement(product.id)
  }

// console.log(props.cart)
  return(
  <div className={classes.CartProduct}>
      <table>
        <tr>
          <td>
              <img
                className={classes.img}
                src={`/images/products/${product.sku}_2.jpg`}
                alt={product.style}
              />
          </td>
            <td> 
                <p>{product.title}</p>
                <p clasName={classes.Style}>{product.style}</p>
                <p clasName={classes.Summa}>{`Quantity: 
                // ${product.quantity}
                `
                }
                </p>
            </td>
            <td>
                <ButtonDelete
                deleteProductFromCart={deleteProductFromCart}
                />
                <p>{product.currencyFormat}{product.price}</p>
                <ButtonSum 
                CountNumPlus={CountNumPlus}
                CountNumMinus={CountNumMinus}
                />
            </td>
        </tr>
      </table>
  </div>
  )
  }
export default CartProduct