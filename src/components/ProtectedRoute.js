// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem('role');
  const token = localStorage.getItem('token');

  console.log('Token:', token);
  console.log('User Role:', userRole);
  console.log('Required Role:', role);

  if (!token || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
