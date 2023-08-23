import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import './signIn.scss';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slice/authSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { fetchAuth } from '../../redux/thunk/authThunk';
import { Navigate } from 'react-router-dom';
export const SignInPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(values);
    if (!data.payload) {
      return alert('Error');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };
  // console.log('register', register);
  // console.log(handleSubmit);
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Paper className="root">
      <Typography className="title">Вход в аккаунт</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className="field"
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <TextField
          className="field"
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Укажите пароль' })}
          fullWidth
        />
        <Button
          disabled={!isValid}
          className="field"
          type="submit"
          size="large"
          variant="contained"
          fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
