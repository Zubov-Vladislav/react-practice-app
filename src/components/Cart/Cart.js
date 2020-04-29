import React, { Component } from "react";
import classes from "./Cart.module.css";
import CartProduct from "../CartProduct/CartProduct"
import ButtonCart from "../UI/ButtonCart/ButtonCart";
import {connect} from 'react-redux';
// import {CountPurchases} from '../../redux/actions/basket';


class Cart extends Component{
 
   state = {
    sumBasket: 0,


   };

   BasketCount = (num) => {
     return num;
   }


render(){
  return(

  
  <div className={classes.Cart}>
    <div className={classes.icon}>
      <div className={classes.icon_img}>
        <img src={`/images/bag-icon.png`} />
        <p>Cart</p>
        <p className = {classes.Sum}>{this.props.counter}</p>  
      </div>
    </div>

    <div className={classes.card}>
      <CartProduct
        BasketCount = {this.BasketCount}
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
)
}
}

function mapStateToProps(state) {
  return {
    sumBasket: state.sumBasket
  }

  
}

function mapDispatchToProps(dispatch) {
  return
    CountPurchases: (sumBasket) => dispatch(CountPurchases(sumBasket))
  
}

function CountPurchases(sumBasket) {
  type: "COUNT_PURCHASES_SUCCESS",
  sumBasket
}

function basketReducer(state = initialState, action) {
  switch (action.type) {
          case COUNT_PURCHASES_SUCCESS:
              return {
                  ...state, sumBasket: sumBasket + BasketCount()
              };
      default:
          return state
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)