import React from 'react';

import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slice/authSlice';
import Search from '../Search/Search';

import './header.scss';
import { useAppDispatch } from '../../redux/store';
import { styled } from '@mui/material';
type HeaderProps = {
  setSearchValue: any;
};

const Header: React.FC<HeaderProps> = ({ setSearchValue }) => {
  const { items, totalPrice } = useSelector((state: any) => state.cart);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) dispatch(logout());
    window.localStorage.removeItem('token');
  };
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="images/image1.png" alt="" />
          <div className="texts">
            <h1>Amir Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Search setSearchValue={setSearchValue} />

      {isAuth ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {location.pathname !== '/card' && (
            <div className="header__cart">
              <Link to="/basket">
                <span>{totalPrice} с</span>
                <div className="btn__delimiter"></div>

                <img src="images/icon1.svg" alt="" />
                <span>{totalCount}</span>
              </Link>
            </div>
          )}
          <Button
            onClick={onClickLogout}
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #fe5f1e',
              color: '#fe5f1e',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#fe5f1e', color: '#fff' },
            }}>
            Выйти
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/login" style={{ margin: '0 20px' }}>
            <LoginButton variant="outlined">Войти</LoginButton>
          </Link>
          <Link to="/register">
            <Button
              sx={{ backgroundColor: '#fe5f1e', '&:hover': { backgroundColor: '#fe5f1e' } }}
              variant="contained">
              Создать аккаунт
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

const LoginButton = styled(Button)(() => ({
  color: '#fe5f1e',
  borderColor: '#fe5f1e',
  '&:hover': {
    borderColor: '#fe5f1e',
  },
}));
