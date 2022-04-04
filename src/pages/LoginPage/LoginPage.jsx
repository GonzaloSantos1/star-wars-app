import React from 'react';
import {LoginForm} from '../../components/LoginForm/LoginForm';
import './_loginPage.scss';

export const LoginPage = () => {
  return (
    <div className='login-page'>
      <LoginForm />
    </div>
  );
};
