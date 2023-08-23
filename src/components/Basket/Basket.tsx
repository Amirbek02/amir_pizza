import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';
import Just from '../Just/Just';
import './basket.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { clearItem } from '../../redux/slice/cartSlice';
function Basket() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);
  const { totalPrice } = useSelector((state: any) => state.cart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onCLickClear = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(clearItem());
    }
  };

  if (!totalCount) {
    return <Just />;
  }

  return (
    <>
      <div className="content">
        <div className="basket">
          <div className="titles">
            <div className="basket__title">
              <img src="images/vector3.svg" alt="" />
              <h2>Корзина</h2>
            </div>
            <div onClick={onCLickClear} className="basket__remove">
              <img src="images/vector4.svg" alt="" />
              <span>Очистить корзину</span>
            </div>
          </div>
          {items.map((item: any) => (
            <CartItem {...item} />
          ))}
          <div className="buy">
            <div className="buy__close">
              <p>
                Всего пицц: <b>{totalCount} шт.</b>{' '}
              </p>
              <Link to="/">
                <button className="btn close__btn">
                  {' '}
                  <img src="images/path.svg" alt="" /> Вернуться назад
                </button>
              </Link>
            </div>
            <div className="buy__pay">
              <p>
                Сумма заказа: <span>{totalPrice} ₽</span>{' '}
              </p>
              <button className="btn pay__btn"> Оплатить сейчас</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
