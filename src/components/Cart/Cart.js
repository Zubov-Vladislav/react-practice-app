import React, { Component } from "react";
import classes from "./Cart.module.css";
import CartProduct from "../CartProduct/CartProduct"
import ButtonCart from "../UI/ButtonCart/ButtonCart";
import {connect} from 'react-redux';
import {
  сountPurchasesPlus,
  сountPurchasesMinus,
  getProductId,
  deleteFromCart
} from '../../store/reducers/cart'

// import {CountPurchases} from '../../redux/actions/basket';


class Cart extends Component{

productQuantityIncrement = (id) => {
  
    return this.props.сountPurchasesPlus(id);
     
   }

productQuantityDecrement = (id) => {

  return this.props.сountPurchasesMinus(id);
    
  }

  deleteBasketToCart = (id) => {
    return this.props.deleteFromCart(id)
  }


render()
{
const {
  products
} = this.props;
  return(
    
  
  <div className={classes.Cart}>
    <div className={classes.icon}>
      <div className={classes.icon_img}>
        <img src={`/images/bag-icon.png`} />
        <p>Cart</p>
        <p className = {classes.Sum}>
          {
          
          products.reduce((acc, cur) => {
           
            return (
              acc + cur.quantity
            )
          }, 0 )}
          
   
        </p>  
      </div>
    </div>

    <div className={classes.card}>

     {products.map((product, index) => {
            return (
              <CartProduct 
              productQuantityIncrement = {this.productQuantityIncrement}
              productQuantityDecrement = {this.productQuantityDecrement}
              deleteBasketToCart = {this.deleteBasketToCart}
              key={index} 
              index={index} 
              product={product} 
              />
            );
          })} 
    
    </div>
    <div className={classes.checout}>
      <table className={classes.subtotal_table}>
        <tr>
          <td className={classes.subtotal}> SUBTOTAL</td>
          <td className={classes.rightcol}>
            <div className={classes.color_yellow}>
            {
           products.reduce((acc, cur) => {
            return (
              acc + (cur.quantity * cur.price)
            )
          }, 0 ).toFixed(2)}

            </div>
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
    products: state.cart.products.map(product => {
    return {
      ...getProductId(state, product.id),
      quantity: product.quantity
    } 
    })
  }

  
}

function mapDispatchToProps(dispatch) {
  return {
    сountPurchasesPlus: (id) => dispatch(сountPurchasesPlus(id)),
    сountPurchasesMinus: (id) => dispatch(сountPurchasesMinus(id)),
    deleteFromCart : (id) => dispatch(deleteFromCart(id)),
    
  }
}






export default connect(mapStateToProps, mapDispatchToProps)(Cart)