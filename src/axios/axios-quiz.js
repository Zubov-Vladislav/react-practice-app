import axios from 'axios'

export default axios.create({
  baseURL: 'https://simplereactshop.herokuapp.com/api/products'
})