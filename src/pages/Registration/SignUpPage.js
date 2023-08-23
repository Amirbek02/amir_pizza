import React from 'react';
import { Button, TextField, Typography, Avatar } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';

import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slice/authSlice';
import { useAppDispatch } from '../../redux/store';
import './signUp.scss';
import { Navigate } from 'react-router-dom';
import { fetchAuthRegister } from '../../redux/thunk/authThunk';
export const SignUpPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuthRegister(values));
    console.log(data);
    if (!data.payload) {
      return alert('Error');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Paper className="root">
      <Typography className="title">Создание аккаунта</Typography>
      <div className="avatar">
        <Avatar sx={{ width: 100, height: 100 }}></Avatar>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className="field"
          label="Имя"
          error={Boolean(errors.firstName?.message)}
          helperText={errors.firstName?.message}
          {...register('firstName', { required: 'Укажите имя' })}
          fullWidth
        />
        <TextField
          className="field"
          label="Фамилия"
          error={Boolean(errors.lastName?.message)}
          helperText={errors.lastName?.message}
          {...register('lastName', { required: 'Укажите фамилию' })}
          fullWidth
        />
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
          className="field"
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
