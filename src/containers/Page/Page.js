import React, { Component } from "react";
import classes from "./Page.module.css";
import FilterButton from "../../components/FilterButton/FilterButton";
import axios from "../../axios/axios-quiz";

import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";

class Page extends Component {
  state = {
    products: [],
    cart: [
      {
        id: 12,
        sku: 12064273040195392,
        title: "Cat Tee Black T-Shirt",
        description: "4 MSL",
        availableSizes: ["S", "XS"],
        style: "Black with custom print",
        price: 10.9,
        installments: 9,
        currencyId: "USD",
        currencyFormat: "$",
        isFreeShipping: true,
      },
    ],
    buttonFilter: ["XS", "S", "M", "L", "XL", "XXL"],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://simplereactshop.herokuapp.com/api/products"
      );
      const cards = [...response.data.products];

      this.setState({
        products: cards,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className={classes.catalog}>
        <div className={classes.head}>
          <p>Sizes:</p>
          {this.state.buttonFilter.map((answerBtn, index) => {
            // {console.log(answerBtn, index)}
            return (
              <FilterButton key={index} index={index} answerBtn={answerBtn} />
            );
          })}
        </div>
        <div className={classes.filter}>
          <div>
            <p>{this.state.products.length || 0} Product(s)</p>
          </div>
          <div>
            <p>Order</p>
            <select>
              <option>select</option>
              <option>select1</option>
              <option>select2</option>
            </select>
          </div>
        </div>
        <div className={classes.CardContainer}>
          {this.state.products.map((answer, index) => {
            return <Card key={index} answer={answer} />;
          })}
        </div>
        <Cart/>
      </div>
    );
  }
}

export default Page;
