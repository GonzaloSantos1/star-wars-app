import React from 'react';
import {useForm} from 'react-hook-form';
import {API} from '../../shared/services/api.js';
import {useNavigate} from 'react-router-dom';
import './_registerForm.scss';

export const RegisterForm = () => {
  const {register, handleSubmit} = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    API.post('users/register', formData).then((response) => {
      console.log(response);
      //almacenar el token en el localStorage
      localStorage.setItem('token', response.data);
      navigate('/login');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type='text'
        name='name'
        {...register('name', {
          required: true,
        })}
      />
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
      <div className='button-container-register'>
        <button>Register</button>
        <a href='/login'>Log in</a>
      </div>
    </form>
  );
};
