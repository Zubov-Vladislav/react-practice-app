import React from "react";
import classes from "./CartProduct.module.css";
import ButtonSum from "../UI/ButtonSum/ButtonSum";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";


export default (props) => (
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
                <p>{`Quantity`}</p>
            </td>
            <td>
                <ButtonDelete/>
                <p>{props.currencyFormat}{props.price}</p>
                <ButtonSum/>
            </td>
        </tr>
      </table>
  </div>
)