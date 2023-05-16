import React from 'react';
import './catrgories.scss'

function Categories({value, onChoose}) {


  const categoriaes = ['Все', "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

  return (
    <div className="categorias">
      <ul>
        {
          categoriaes.map((item, idx) => (
            <li key={idx} onClick={() => onChoose(idx)} className={value === idx ? 'active' : ''}>{item}</li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default Categories