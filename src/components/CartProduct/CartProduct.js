import React from "react";
import classes from "./CartProduct.module.css";
import ButtonSum from "../UI/ButtonSum/ButtonSum";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";


 const CartProduct = (props) => {

  const CountNum = (num) => {
    props.basketCount(num)
    
  }
// console.log(props.cart)
  return(
  <div className={classes.CartProduct}>
      <table>
        <tr>
          <td>
              <img
                className={classes.img}
                src={`/images/products/${props.cart.sku}_2.jpg`}
                alt={props.style}
              />
          </td>
            <td> 
                <p>{props.cart.title}</p>
                <p clasName={classes.Style}>{props.cart.style}</p>
                <p clasName={classes.Summa}>{`Quantity: 
                // ${props.buy}`
                }
                </p>
            </td>
            <td>
                <ButtonDelete/>
                <p>{props.currencyFormat}{props.cart.price}</p>
                <ButtonSum CountNum = {CountNum}/>
            </td>
        </tr>
      </table>
  </div>
  )
  }
export default CartProduct