import React from "react";
import classes from "./Cart.module.css";
import CartProduct from "../CartProduct/CartProduct"
import ButtonCart from "../UI/ButtonCart/ButtonCart";

export default (props) => (
  <div className={classes.Cart}>
    <div className={classes.icon}>
      <div className={classes.icon_img}>
        <img src={`/images/bag-icon.png`} />
        Cart
      </div>
    </div>

    <div className={classes.card}>
      <CartProduct
        
        id={props.id}
        sku={props.sku}
        title={props.title}
        description={props.description}
        availableSizes={props.availableSizes}
        style={props.style}
        price={props.price}
        installments={props.installments}
        currencyId={props.currencyId}
        currencyFormat={props.currencyFormat}
        isFreeShipping={props.isFreeShipping}
      />
      
    
    </div>
    <div className={classes.checout}>
      <table className={classes.subtotal_table}>
        <tr>
          <td className={classes.subtotal}> SUBTOTAL</td>
          <td className={classes.rightcol}>
            <div className={classes.color_yellow}>$32</div>
            <div className={classes.orupto}>OR UP TO 5 X $ 6.40</div>
          </td>
        </tr>
      </table>
      <div>
        <ButtonCart>CHECKOUT</ButtonCart>
      </div>
    </div>
  </div>
);
