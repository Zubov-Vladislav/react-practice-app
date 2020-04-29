import React from "react";
import classes from "./CartProduct.module.css";
import ButtonSum from "../UI/ButtonSum/ButtonSum";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";


 const CartProduct = (props) => {

  CountNum = (num) => {
    props.BasketCount(num)
  }

  return(
  <div className={classes.CartProduct}>
      <table>
        <tr>
          <td>
              <img
                className={classes.img}
                src={`/images/products/${props.sku}_2.jpg`}
                alt={props.style}
              />
          </td>
            <td> 
                <p>{props.title}</p>
                <p>{props.style}</p>
                <p>{`Quantity: 55`}</p>
            </td>
            <td>
                <ButtonDelete CountNum = {this.CountNum}/>
                <p>{props.currencyFormat}{props.price}</p>
                <ButtonSum CountNum = {this.CountNum}/>
            </td>
        </tr>
      </table>
  </div>
  )
  }
export default CartProduct