import React, { Component } from "react";
import classes from "./Page.module.css";
import FilterButton from "../../components/FilterButton/FilterButton";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";

import {
  addProductsToList,
  getProductsList,
} from "../../store/reducers/products";

class Page extends Component {
  state = {
    cart: [],
    buttonFilter: [
      {
        value: "XS",
        active: false,
      },
      {
        value: "S",
        active: false,
      },
      {
        value: "M",
        active: false,
      },
      {
        value: "L",
        active: false,
      },
      {
        value: "XL",
        active: false,
      },
      {
        value: "XXL",
        active: false,
      },
    ],
  };

  handlerFilter = (value) => {
    const buttonFilter = this.state.buttonFilter;
    const newButtonFilter = buttonFilter.map((filter) => {
      if (filter.value === value) {
        return {
          ...filter,
          active: !filter.active,
        };
      }
      return filter;
    });
    this.setState({
      buttonFilter: newButtonFilter,
    });
  }

  async componentDidMount() {
    try {
      this.props.addProductsToList();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const products = this.props.products;

    return (
      <div className={classes.catalog}>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className={classes.head}>
              <p>Sizes:</p>
              
              {this.props.buttonFilter.map((buttonFilter, index) => {
                
                return (
                  <FilterButton
                    key={index}
                    buttonFilter={buttonFilter}
                    handlerFilter={this.handlerFilter}
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
              {}
              {products.map((id, index) => {
                return <Card key={index} id={id} />;
              })}
            </div>
            <Cart />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    products: getProductsList(store),
    isLoading: store.products.isLoading,
    sizes: store.products.sizes,
    buttonFilter: store.products.buttonFilter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductsToList: (list) => dispatch(addProductsToList(list)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
