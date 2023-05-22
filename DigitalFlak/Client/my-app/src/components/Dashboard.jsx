
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Category from './Home/Category';
import Home from './Home/Home';
import Product from './Home/Product';
import myImage from './LoginForm/logo2.jpg';
import logo from './logo.jpg';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div className='navigator'>
        <div className='logo'>
          <div className='small-logo'>
            <img src={myImage} alt="My Image" id='logo' />
          </div>
          <div className='Logo-text'><b>digital</b>flake</div>
        </div>
        <div className='profile'>
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </div>
      </div>
      <div className='Menu-view'>
        <Home></Home>
        <button id='btn1'>{'\u003E'}</button>
        <Category></Category>
        <button id='btn2'>{'\u003E'}</button>
        <Product></Product>
        <button id='btn3'>{'\u003E'}</button>
        
      </div>
      <div className='Item-view'>
        <img src={logo} alt="My Image" id='logo1' />
        <p>Welcome To DigitalFlake Admin</p>
      </div>
      


    </div>
  );
};

export default Dashboard;
