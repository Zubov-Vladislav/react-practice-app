import React, { useState } from "react";
import classes from "./CartProduct.module.css";
import ButtonSum from "../UI/ButtonSum/ButtonSum";
import ButtonDelete from "../UI/ButtonDelete/ButtonDelete";

const CartProduct = ({
  state,
  product,
  deleteBasketToCart,
  productQuantityIncrement,
  productQuantityDecrement,
}) => {
  const [deleteStyle, setDeleteStyle] = useState(false);

  const deleteProductFromCart = () => {
    deleteBasketToCart(product.id);
  };

  const CountNumPlus = () => {
    productQuantityIncrement(product.id);
  };

  const CountNumMinus = () => {
    productQuantityDecrement(product.id);
  };

  return (
    <div
      className={
        (classes.CartProduct, `${deleteStyle ? classes.borderStyle : " "}`)
      }
    >
      <table>
        <tbody>
          <tr>
            <td>
              <img
                className={classes.img}
                src={`/images/products/${product.sku}_2.jpg`}
                alt={product.style}
              />
            </td>
            <td>
              <p className={`${deleteStyle ? classes.st : " "}`}>
                {product.title}
              </p>
              <p
                className={(classes.Style, `${deleteStyle ? classes.st : " "}`)}
              >
                {product.style}
              </p>
              <p
                className={(classes.Summa, `${deleteStyle ? classes.st : " "}`)}
              >
                {`Quantity: 
                ${product.quantity}
                `}
              </p>
            </td>
            <td>
              <div
                onMouseOver={() => {
                  setDeleteStyle(true);
                }}
                onMouseOut={() => {
                  setDeleteStyle(false);
                }}
              >
                <ButtonDelete deleteProductFromCart={deleteProductFromCart} />
              </div>
              <p className={`${deleteStyle ? classes.st : " "}`}>
                {product.currencyFormat}
                {`${product.price.toFixed(2)}`}
              </p>
              <ButtonSum
                CountNumPlus={CountNumPlus}
                CountNumMinus={CountNumMinus}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CartProduct;
