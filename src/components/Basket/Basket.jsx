import React from 'react'

import './basket.scss'

function Basket() {
  return (
    <div className='content'>
      <div className="basket">
        <div className='titles'>
          <div className='basket__title'>
            <img src="images/vector3.svg" alt="" />
            <h2>Корзина</h2>
          </div>
          <div className='basket__remove'>
            <img src="images/vector4.svg" alt="" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="choosed">
          <div className="choosed__pizza">
            <img className='choosed__img' src="images/image2.png" alt="" />
            <div>
              <h3>Сырный цыпленок</h3>
              <span>тонкое тесто, 26 см.</span>
            </div>
            <div className='choosed__minus'><img src="images/minus.svg" alt="" /></div>
            <b>2</b>
            <div className='choosed__plus'><img src="images/plus.svg" alt="" /></div>
            <div className='choosed__prace'>770 ₽ </div>
            <img src="images/vector5.svg" alt="" />
          </div>
        </div>
        <div className="choosed">
          <div className="choosed__pizza">
            <img className='choosed__img' src="images/image2.png" alt="" />
            <div>
              <h3>Сырный цыпленок</h3>
              <span>тонкое тесто, 26 см.</span>
            </div>
            <div className='choosed__minus'><img src="images/minus.svg" alt="" /></div>
            <b>2</b>
            <div className='choosed__plus'><img src="images/plus.svg" alt="" /></div>
            <div className='choosed__prace'>770 ₽ </div>
            <img src="images/vector5.svg" alt="" />
          </div>
        </div>
        <div className="choosed">
          <div className="choosed__pizza">
            <img className='choosed__img' src="images/image2.png" alt="" />
            <div>
              <h3>Сырный цыпленок</h3>
              <span>тонкое тесто, 26 см.</span>
            </div>
            <div className='choosed__minus'><img src="images/minus.svg" alt="" /></div>
            <b>2</b>
            <div className='choosed__plus'><img src="images/plus.svg" alt="" /></div>
            <div className='choosed__prace'>770 ₽ </div>
            <img src="images/vector5.svg" alt="" />
          </div>
        </div>
        <div className="choosed">
          <div className="choosed__pizza">
            <img className='choosed__img' src="images/image2.png" alt="" />
            <div>
              <h3>Сырный цыпленок</h3>
              <span>тонкое тесто, 26 см.</span>
            </div>
            <div className='choosed__minus'><img src="images/minus.svg" alt="" /></div>
            <b>2</b>
            <div className='choosed__plus'><img src="images/plus.svg" alt="" /></div>
            <div className='choosed__prace'>770 ₽ </div>
            <img src="images/vector5.svg" alt="" />
          </div>
        </div>
        <div className="buy">
          <div className="buy__close">
            <p>Всего пицц: <b>3 шт.</b> </p>
            <button className='btn close__btn'> <img src="images/path.svg" alt="" /> Вернуться назад</button>
          </div>
          <div className="buy__pay">
            <p>Сумма заказа:  <span>900 ₽</span> </p>
            <button className='btn pay__btn'> Оплатить сейчас</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Basket