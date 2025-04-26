import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartItem = ({ image, productName, price, quantity, onRemove, onQuantityChange }) => {
  return (
    <tr>
      <td>
        <a href="#" onClick={onRemove}>
          <AiOutlineCloseCircle />
        </a>
      </td>
      <td>
        <img src={image} alt={productName} />
      </td>
      <td>{productName}</td>
      <td>${price}</td>
      <td>
        <input type="number" value={quantity} onChange={(e) => onQuantityChange(e.target.value)} />
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
