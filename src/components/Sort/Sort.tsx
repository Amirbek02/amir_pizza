import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSorts } from '../../redux/slice/filteSlice';

type SortItem = {
  name: string;
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
};

type SortClick = MouseEvent & {
  path: Node[];
};

export const lists: SortItem[] = [
  { name: 'популярности (DESC)', sortProperty: 'rating' },
  { name: 'популярности (ASC)', sortProperty: '-rating' },
  { name: 'по цене (DESC)', sortProperty: 'price' },
  { name: 'по цене (ASC)', sortProperty: '-price' },
  { name: 'по алфавиту (DESC)', sortProperty: 'title' },
  { name: 'по алфавиту (ASC)', sortProperty: '-title' },
];
function Sort() {
  const dispatch = useDispatch();
  const closeSort = React.useRef<HTMLDivElement>(null);

  const sort = useSelector((state: any) => state.filter.sort);

  const onClickSort = (obj: SortItem) => {
    dispatch(setSorts(obj));
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const onSortClose = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      const _event = event as SortClick;
      if (closeSort.current && !_event.composedPath().includes(closeSort.current)) {
        setOpen(false);
        console.log('click');
      }
    };
    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };
  }, []);
  return (
    <div ref={closeSort} className="sort">
      <div className="sort__label">
        <img src="images/vector.svg" alt="" />
        <b>Сортировка по: </b>
        <span onClick={() => onSortClose()}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__choose">
          <ul>
            {lists.map((list, i) => (
              <li
                key={i}
                onClick={() => onClickSort(list)}
                className={sort.sortProperty === list.sortProperty ? 'active' : ''}>
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
