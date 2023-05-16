import React from 'react'
import axios from 'axios';
import Cart from '../Cart/Cart'
import Categories from '../Categories/Categories';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setPageCount } from '../../redux/slice/filteSlice';
import Skeleton from './Skeleton';
import Sort from '../Sort/Sort';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination'

import './home.scss'
function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filterReducer.categoryId);
  const sortType = useSelector((state) => state.filterReducer.sort.sortProperty);
  const pageCount = useSelector((state) => state.filterReducer.pageCount);
  console.log(pageCount)
  

  const onClickFilter = (id) => {
    dispatch(setCategory(id))
  }
  

  React.useEffect(() => {
    async function acyncFun() {
      setIsLoading(true)
    const sortBy = sortType.replace('-', '');
    const categoryBy = category > 0 ? `category=` + category : '';
    const orderBy = sortType.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&_search=${searchValue}` : '';
      const {data} = await axios.get(`http://localhost:3002/items?_limit=4&_page=${pageCount}&${categoryBy}${search}&_sort=${sortBy}&_order=${orderBy}`);
      setItems(data);
      setIsLoading(false);
    }
    acyncFun()
    // setIsLoading(true)
    // const sortBy = sortType.replace('-', '');
    // const categoryBy = category > 0 ? `category=` + category : '';
    // const orderBy = sortType.includes('-') ? 'asc' : 'desc';
    // const search = searchValue ? `&_search=${searchValue}` : '';
    // fetch(`http://localhost:3002/items?_limit=4&_page=${currentPage}&${categoryBy}${search}&_sort=${sortBy}&_order=${orderBy}`).then((res) => {
    //   return res.json()
    // }).then((data) => {
    //   setItems(data)
    //   setIsLoading(false)
    // }
    // )
  }, [category, sortType, searchValue, pageCount]);

  const onChangePage = (number) => {
    dispatch(setPageCount(number))
  }

  const renderItems = () => {
    const filterItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ?  [...new Array(6)].map((_, i) => <Skeleton  key={i}/>) : (isLoading ? [...Array(6)] : filterItems).map((item, idx) => (
      <Cart 
      key={idx}
      {...item}
      />
    )    
  ))
  }

  return (
    <>
    <Header 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    <div className='content'>
      <div className="container">
        <Categories value={category} onChoose={onClickFilter}/>
        <Sort/>
      </div>
    </div>
    <div className="cart">
      {renderItems()}
      
    </div>
    <Pagination value={pageCount} onChangePages= {onChangePage}/>
    </>
  )
}

export default Home