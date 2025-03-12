import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userLoggedIn') === 'true';
  //   if (!isAuthenticated) {
  //     return <Navigate to='/login' />;
  //   }
  //   return children;

  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
