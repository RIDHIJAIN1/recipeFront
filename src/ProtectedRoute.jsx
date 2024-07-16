import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Context from './main.jsx';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, loading } = useContext(Context);

  if (loading) return <Loader />;

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
