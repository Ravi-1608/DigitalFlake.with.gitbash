import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('token') !== null);

  // listen for changes to the 'token' in local storage
  useEffect(() => {
    const onStorageChange = () => {
      setUserLoggedIn(localStorage.getItem('token') !== null);
    };

    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={userLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;


