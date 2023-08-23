import React from 'react';

import './just.scss';
import { Link } from 'react-router-dom';
const Just: React.FC = () => {
  return (
    <>
      <div className="basket">
        <div className="empty">
          <h2 className="empty__title">
            Корзина пустая <span>😕</span>
          </h2>
          <p className="empty__text">
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
            главную страницу.
          </p>
          <img src="images/vector6.svg" alt="" />
          <Link to="/">
            <button className="btn empty__btn">Вернуться назад</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Just;
