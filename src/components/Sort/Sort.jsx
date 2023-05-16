import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setSort} from '../../redux/slice/filteSlice'


function Sort() {
  const [open, setOpen] = React.useState(false);
  const onSortClose = () => {
    setOpen(!open)
  }
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filterReducer.sort);
  console.log(sort)
  const onClickSort = (obj) => {
    dispatch(setSort(obj))
    setOpen(false)
    
  }
  const lists = [
                {name: 'популярности (DESC)', sortProperty: 'rating'}, 
                {name: 'популярности (ASC)', sortProperty: '-rating'}, 
                {name: 'по цене (DESC)', sortProperty: 'price'}, 
                {name: 'по цене (ASC)', sortProperty: '-price'}, 
                {name: 'по алфавиту (DESC)', sortProperty: 'title'},
                {name: 'по алфавиту (ASC)', sortProperty: '-title'}
              ];
  return (
    <div className="sort">
          <div className="sort__label">
            <img src="images/vector.svg" alt="" />
            <b>Сортировка по: </b>
            <span onClick={() => onSortClose()}>{sort.name}</span>
      
          </div>
          {
            open && (
              <div className="sort__choose">
                      <ul>
                        {
                          lists.map((list, i) => (
                            <li key={i} onClick={() => onClickSort(list)} className={sort.sortProperty === list.sortProperty ? 'active' : ''}>{list.name}</li>
                          )) 
                        }
                        
                        
                      </ul>
                    </div>
            )
          }
          
        </div>
  )
}

export default Sort