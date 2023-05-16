import React from 'react'

import './just.scss'
function Just() {
  return (
    <div className="basket">
      <div className='empty'>
        <h2 className="empty__title">Корзина пустая <span>😕</span></h2>
        <p className="empty__text">
        Вероятней всего, вы не заказывали ещё пиццу.
  Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="images/vector6.svg" alt="" />
        <button className="btn empty__btn">Вернуться назад</button>
      </div>
    </div>
  )
}

export default Just