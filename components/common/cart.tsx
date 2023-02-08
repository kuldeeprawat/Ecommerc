import * as React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
const getItems = JSON.parse(localStorage.getItem('items'));

const Cart = () => {
  return (
    <>
      <a href="">
        <FaCartArrowDown />
        <span>{getItems ? getItems.length : ''}</span>
      </a>
    </>
  );
};
export const CartPage = () => {
  return <div>dsfs</div>;
};

export default Cart;
