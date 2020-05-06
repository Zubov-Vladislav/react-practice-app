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



// const cart = this.props.cart
const {
  products
} = this.props;
//console.log('Gl', globalState)

  return(
    
  
  <div className={classes.Cart}>
    <div className={classes.icon}>
      <div className={classes.icon_img}>
        <img src={`/images/bag-icon.png`} />
        <p>Cart</p>
        <p className = {classes.Sum}>f
        {this.props.sumBasket}
   
        </p>  
      </div>
    </div>

    <div className={classes.card}>

     {products.map((product, index) => {
            // {console.log(answerBtn, index)}
            return (
              <CartProduct 
              productQuantityIncrement = {this.productQuantityIncrement}
              productQuantityDecrement = {this.productQuantityDecrement}
              deleteBasketToCart = {this.deleteBasketToCart}
              key={index} 
              index={index} 
              product={product} 
              
              // idCartBasket = {product.id}
              // quantityBasket = {product.quatity}

             // count = { ,.,.,.,.,.,.}
              />
            );
          })} 




{/* 
      <CartProduct
        basketCount = {this.basketCount}
        id={this.props.id}
        sku={this.props.sku}
        title={this.props.title}
        description={this.props.description}
        availableSizes={this.props.availableSizes}
        style={this.props.style}
        price={this.props.price}
        installments={this.props.installments}
        currencyId={this.props.currencyId}
        currencyFormat={this.props.currencyFormat}
        isFreeShipping={this.props.isFreeShipping}
      />
      
      <CartProduct
        basketCount = {this.basketCount}
        id={this.props.id}
        sku={this.props.sku}
        title={this.props.title}
        description={this.props.description}
        availableSizes={this.props.availableSizes}
        style={this.props.style}
        price={this.props.price}
        installments={this.props.installments}
        currencyId={this.props.currencyId}
        currencyFormat={this.props.currencyFormat}
        isFreeShipping={this.props.isFreeShipping}
      /> */}
    
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