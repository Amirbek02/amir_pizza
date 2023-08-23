import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullPizzas: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  React.useEffect(() => {
    async function fethPizza() {
      const { data } = await axios.get('http://localhost:3002/items/' + id);
      setPizza(data);
    }
    fethPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }
  return (
    <div className="wrapper">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizzas;
