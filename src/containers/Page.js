import React, { Component } from "react";
import classes from "./Page.module.css";
import FilterButton from "../../components/FilterButton/FilterButton";
import axios from "../../axios/axios-quiz";

import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
// import Sort from "../../components/Sort/Sort"

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
    btnFilter: [],
    buttonStyle: [false, false, false,false, false, false]
  };

  onSort = (event) => {
    const selectIndex = event.target.value;
    const products = [...this.state.products];

    switch (selectIndex) {
      case "ascending":
        products.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
        break;
      case "descending":
        products.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
        break;
    }

    this.setState({
      products,
    });
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


 
ButtonFilter = (value) =>{
  const filter = [...this.state.btnFilter]
  let btnDelete
  let id
  filter.forEach((key,index) => {
    if(key === value)
     btnDelete = true
     id = index
  })

  if (btnDelete){
    filter.splice(id,1)
  } else {
    filter.push(value)
   
  }
  this.setState({
    btnFilter: filter
  })
}


StyleActivBtn = (id) => {
    let Mas = this.state.buttonStyle
    Mas[id] = !Mas[id]
    console.log(Mas[id])
  }


  render() {
    console.log(this.state.availableSizes)
    return (
      <div className={classes.catalog}>
        <div className={classes.head}>
          <p>Sizes:</p>
          {this.state.buttonFilter.map((answerBtn, index) => {
            // {console.log(answerBtn, index)}
            return (
              <FilterButton 
              StyleActivBtn = {this.StyleActivBtn}
              ButtonFilter = {this.ButtonFilter}
              key={index} 
              index={index} 
              answerBtn={answerBtn} 
              active = {this.state.btnFilter.includes(answerBtn)}
              />
            );
          })}
        </div>
        <div className={classes.filter}>
          <div>
            <p>{this.state.products.length || 0} Product(s)</p>
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
          {(this.state.btnFilter.length == 0) ?
          this.state.products.map((answer, index) => {
            return <Card key={index} answer={answer} />;
          }) 
          :
          // this.state.btnFilter.map((key) => {
          //   this.state.products.availableSizes.map((answer, index) => {
          //     if (key == answer){
          //       return <Card key={index} answer={answer} />;
          //     }
          //   })
          // })
          this.state.products.filter((item) => {
            let flag = false
            item.availableSizes.forEach((size) => {
              if (this.state.btnFilter.indexOf(size) > -1){
                flag = true
              }
            
            })
            return flag
          }).map((answer, index) => {
            return <Card key={index} answer={answer} />;
          }) 
          
          
          }
        </div>
        <Cart />
      </div>
    );
  }
}

export default Page;
