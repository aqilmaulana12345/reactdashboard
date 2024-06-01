import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/admin';
import Login from './components/Login';
import User from './components/user';
import Ideas from './components/ideas';
import Contact from './components/contact';
import Agent from './components/agent';
import Ticket from './components/ticket'; // Menambahkan komponen Ticket
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ideas"
          element={
            <ProtectedRoute role="admin">
              <Ideas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute role="admin ">
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agent"
          element={
            <ProtectedRoute role="admin">
              <Agent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ticket" // Menambahkan rute untuk komponen Ticket
          element={
            <ProtectedRoute role="user">
              <Ticket />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ticket" // Menambahkan rute untuk komponen Ticket
          element={
            <ProtectedRoute role="admin">
              <Ticket />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
