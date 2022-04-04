import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {API} from '../../shared/services/api';
import {JwtContext} from '../../shared/context/JwtContext';
import './_loginForm.scss';

export const LoginForm = () => {
  const {register, handleSubmit} = useForm();
  let navigate = useNavigate();
  const {setJwt} = useContext(JwtContext);
  const onSubmit = (formData) => {
    console.log(formData);
    API.post('users/login', formData).then((response) => {
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      setJwt(response.data.token);
      // TO DO revisar la ruta
      navigate('/');
    });
  };

  return (
    <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
      <div className='input-container-login'>
        <label>Email</label>
        <input
          type='email'
          name='email'
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          {...register('password', {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
      </div>
      <div className='button-container-login'>
        <button>Login</button>
        <a href='/register'>Sign up</a>
      </div>
    </form>
  );
};
