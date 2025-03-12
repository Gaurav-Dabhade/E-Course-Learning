import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate('/');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  let content;

  if (!isLoggedIn) {
    content = (
      <div>
        <Link to='/login'>
          <button type='button' className='btn btn-primary m-3'>
            Login
          </button>
        </Link>
        <Link to='/register'>
          <button type='button' className='btn btn-success'>
            Register
          </button>
        </Link>
      </div>
    );
  } else {
    content = (
      <Link to='/'>
        <button type='button' className='btn btn-info' onClick={handleLogout}>
          Logout
        </button>
      </Link>
    );
  }

  return (
    <div style={containerStyle}>
      <h1>E-course Learning Platform</h1>
      {content}
    </div>
  );
}
