import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './cart.scss';
import { addItem } from '../../redux/slice/cartSlice';

function Cart({ id, imageUrl, title, price, sizes, types }) {
  const dispatch = useDispatch();
  const typesName = ['тонкое', 'традиционное'];
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);

  const cartItem = useSelector((state) => state.cart.items.find((obj) => id === obj.id));

  const onClickCart = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typesName[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  const addCount = cartItem ? cartItem.count : 0;
  return (
    <div className="pizza-wrapper">
      <div className="containers">
        <Link to={`/pizza/${id}`}>
          <img src={imageUrl} alt="" />
          <h3>{title}</h3>
        </Link>
        <div className="cart__choosing">
          <div className="view">
            <ul>
              {types.map((type) => (
                <li
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={activeType === type ? 'active' : ''}>
                  {typesName[type]}
                </li>
              ))}
            </ul>
          </div>
          <div className="size">
            <ul>
              {sizes.map((size, i) => (
                <li
                  key={i}
                  onClick={() => setActiveSize(i)}
                  className={activeSize === i ? 'active' : ''}>
                  {size} см.
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cart__prace">
          <div>от {price} ₽</div>
          <button className="btn" onClick={onClickCart}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>

            <span>Добавить</span>
            {addCount > 0 && <li>{addCount}</li>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
