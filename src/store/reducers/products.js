// import axios from "../../axios/axios-quiz";

//  export async function loadProducts() {
//     try {
//       // isLoading = this.state.isLoading
//       const response = await axios.get(
//         "https://simplereactshop.herokuapp.com/api/products"
//       );
//       const cards = [...response.data.products];

//       this.setState({
//         products: cards,
//       });
//     } catch (e) {
//       console.log(e);
//     }
// }
const initialState = {
    products :{
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
      }
  }

export function reducer(state = initialState, action) {
  
    return state;
}
