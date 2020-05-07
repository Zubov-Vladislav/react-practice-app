import React from "react";
import classes from "./CartProduct.module.css";
import ButtonSum from "../UI/ButtonSum/ButtonSum";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";


 const CartProduct = ({state, product, deleteBasketToCart, productQuantityIncrement, productQuantityDecrement } ) => {

  const deleteStyle = () => {
    return classes.st;
  }
  
  const deleteProductFromCart = () => {
    deleteBasketToCart(product.id)
  }

  const CountNumPlus = () => {
    productQuantityIncrement(product.id)
  }

  const CountNumMinus = () => {
    productQuantityDecrement(product.id)
  }


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
                <p className={classes.Style}>{product.style}</p>
                <p className={classes.Summa, `${deleteStyle}`}>{`Quantity: 
                ${product.quantity}
                `
                }
                </p>
            </td>
            <td>
                <ButtonDelete
                deleteStyle = {deleteStyle}
                deleteProductFromCart={deleteProductFromCart}
                />
                <p>{product.currencyFormat}{`${(product.price).toFixed(2)}`}</p>
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