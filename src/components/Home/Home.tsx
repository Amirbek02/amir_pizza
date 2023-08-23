import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { setCategory, setPageCount, setFilters, initialState } from '../../redux/slice/filteSlice';
import { useNavigate } from 'react-router-dom';
import { fetchPizzas } from '../../redux/slice/pizzasSlice';
import { useAppDispatch } from '../../redux/store';

import Cart from '../Cart/Cart';
import Skeleton from './Skeleton';
import Sort, { lists } from '../Sort/Sort';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import Categories from '../Categories/Categories';

import './home.scss';
const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSeach = React.useRef(false);
  const isMounted = React.useRef(false);

  const category = useSelector((state: any) => state.filter.categoryId);
  const sortType = useSelector((state: any) => state.filter.sort);
  const pageCount = useSelector((state: any) => state.filter.pageCount);
  const { items, status } = useSelector((state: any) => state.pizzas);
  const [searchValue, setSearchValue] = React.useState('');

  const onClickFilter = React.useCallback((id: number) => {
    dispatch(setCategory(id));
  }, []);

  const onChangePages = (number: number) => {
    dispatch(setPageCount(number));
  };
  const filterPizza = () => {
    const sortBy: any = sortType.sortProperty.replace('-', '');
    const categoryBy = category > 0 ? `category=` + category : '';
    const orderBy = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&_search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        categoryBy,
        orderBy,
        search,
        pageCount,
      }),
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        category,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sortType.sortProperty, pageCount]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      if (
        initialState.categoryId === Number(params.category) &&
        initialState.sort.sortProperty === params.sortProperty &&
        initialState.pageCount === Number(params.pageCount)
      ) {
        filterPizza();
      }
      const sort = lists.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort: sort ? sort : lists[0],
        }),
      );
      isSeach.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSeach.current) {
      filterPizza();
    }

    isSeach.current = false;
  }, [category, sortType.sortProperty, searchValue, pageCount]);

  const renderItems = () => {
    const filterItems = items.filter((item: any) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return status === 'loading'
      ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
      : (status === 'loading' ? [...Array(6)] : filterItems).map((item: any, idx: any) => (
          <Cart key={idx} {...item} />
        ));
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <Categories value={category} onChoose={onClickFilter} />
          <Sort />
        </div>
      </div>
      <div className="cart">{renderItems()}</div>
      <Pagination onChangePages={onChangePages} />
    </>
  );
};

export default Home;
