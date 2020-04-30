import React, { Component } from "react";
import classes from "./Page.module.css";
import FilterButton from "../../components/FilterButton/FilterButton";

import { connect } from "react-redux";
import axios from "../../axios/axios-quiz";

import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";

import {
  addProductsToList,
  getProductsList,
} from "../../store/reducers/products";
// import Sort from "../../components/Sort/Sort"

class Page extends Component {
  state = {
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
    btnFilter: [],
    buttonStyle: [false, false, false, false, false, false],
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://simplereactshop.herokuapp.com/api/products"
      );
      const cards = [...response.data.products];

      this.props.addProductsToList(cards);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const products = this.props.products;

    return (
      <div className={classes.catalog}>
        <div className={classes.head}>
          <p>Sizes:</p>

          {this.state.buttonFilter.map((answerBtn, index) => {
            return (
              <FilterButton
                StyleActivBtn={this.StyleActivBtn}
                ButtonFilter={this.ButtonFilter}
                key={index}
                index={index}
                answerBtn={answerBtn}
                active={this.state.btnFilter.includes(answerBtn)}
              />
            );
          })}
        </div>
        <div className={classes.filter}>
          <div>
            <p>{products.length || 0} Product(s)</p>
          </div>
          <div>
            <p>Order</p>

            <select onClick={this.onSort}>
              <option value="ascending">по возрастанию цены</option>
              <option value="descending">по убыванию цены</option>
            </select>
          </div>
        </div>

        <div className={classes.CardContainer}>
          {products.map((id, index) => {
            return <Card key={index} id={id} />;
          })}
        </div>
        <Cart />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    products: getProductsList(store),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductsToList: (list) => dispatch(addProductsToList(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
