import React, { Component } from "react";
import classes from "./Cart.module.css";
import CartProduct from "../CartProduct/CartProduct"
import ButtonCart from "../UI/ButtonCart/ButtonCart";
import {connect} from 'react-redux';
import {сountPurchases} from '../../store/reducers/cart'

// import {CountPurchases} from '../../redux/actions/basket';


class Cart extends Component{
 state = {
  products: [
    {
      "id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },

    {
      "id": 13,
      "sku": 51498472915966366,
      "title": "Dark Thug Blue-Navy T-Shirt",
      "description": "",
      "availableSizes": ["M"],
      "style": "Front print and paisley print",
      "price": 29.45,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },
  ]
 }

   basketCount = (num) => {
     this.props.сountPurchases(num);
     
   }


render()

{
const cart = this.props.cart
console.log(cart)
  return(

  
  <div className={classes.Cart}>
    <div className={classes.icon}>
      <div className={classes.icon_img}>
        <img src={`/images/bag-icon.png`} />
        <p>Cart</p>
        <p className = {classes.Sum}>f{this.props.sumBasket}
   
        </p>  
      </div>
    </div>

    <div className={classes.card}>

    {this.state.products.map((cart, index) => {
            // {console.log(answerBtn, index)}
            return (
              <CartProduct 
              basketCount = {this.basketCount}
              key={index} 
              index={index} 
              cart={cart} 
            
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
    sumBasket: state.sumBasket
  }

  
}

function mapDispatchToProps(dispatch) {
  return {
    сountPurchases: (sumBasket) => dispatch(сountPurchases(sumBasket))
    //добавить еще один
  }
}






export default connect(mapStateToProps, mapDispatchToProps)(Cart)