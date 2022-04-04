import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {JwtContext} from '../../context/JwtContext';
import './_buttonLogout.scss';

export const ButtonLogout = () => {
  let navigate = useNavigate();
  const {setJwt} = useContext(JwtContext);
  const logOut = () => {
    localStorage.removeItem('token');
    setJwt(null);
    navigate('/login');
  };
  return (
    <button className='logout-btn' onClick={logOut}>
      Log Out
    </button>
  );
};
