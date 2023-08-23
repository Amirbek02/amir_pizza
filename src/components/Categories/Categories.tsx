import React from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';
import './catrgories.scss';

type CategoriesProps = {
  value: number;
  onChoose: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onChoose }) => {
  useWhyDidYouUpdate('Categories', { value, onChoose });
  const categoriaes = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categorias">
      <ul>
        {categoriaes.map((item, idx) => (
          <li key={idx} onClick={() => onChoose(idx)} className={value === idx ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
