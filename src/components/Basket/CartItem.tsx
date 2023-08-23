import React from 'react';
import { CartItem, addItem, minusItem, removeItem } from '../../redux/slice/cartSlice';
import { useAppDispatch } from '../../redux/store';
import clsx from 'clsx';

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
  imageUrl: string;
};

const CartItemBlock: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  type,
  size,
  count,
  imageUrl,
}) => {
  const dispatch = useAppDispatch();

  const onCLickAdd = () => {
    dispatch(
      addItem({
        id,
      } as CartItem),
    );
  };

  const onCLickMinus = () => {
    dispatch(minusItem(id));
  };

  const onCLickRemove = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="choosed">
      <div className="choosed__pizza">
        <div className="disp">
          <img className="choosed__img" src={imageUrl} alt="" />
          <div>
            <h3>{title}</h3>
            <span>
              {type}, {size} см.
            </span>
          </div>
        </div>

        <div className="disp">
          <button disabled={count === 1} onClick={onCLickMinus} className="choosed__minus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none">
              <path
                d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z"
                fill="#FE5F1E"
              />
            </svg>
          </button>
          <b>{count}</b>
          <button onClick={onCLickAdd} className="choosed__plus">
            <img src="images/plus.svg" alt="" />
          </button>
        </div>
        <div className="choosed__prace">{price * count} ₽ </div>
        <img onClick={onCLickRemove} src="images/vector5.svg" alt="" />
      </div>
    </div>
  );
};

export default CartItemBlock;
