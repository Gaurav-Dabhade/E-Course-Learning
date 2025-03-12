import React from 'react';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../assets/icons/left_arrow.svg';
import { ReactComponent as BellIcon } from '../assets/icons/bell_icon.svg';
import { Avatar } from '@mui/material';

export default function UserDetails() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.setItem('userLoggedIn', 'false');
    navigate('/');
  };

  return (
    <Stack direction='horizontal' gap={3}>
      <LeftArrow width='30' height='30' />
      <BellIcon width='30' height='30' />
      <div className='ms-auto'>
        <Stack direction='horizontal' gap={3}>
          <div>
            <h5>Gaurav Dabhade</h5>
            <p>Student</p>
          </div>
          <Avatar sx={{ marginLeft: '8px' }} src='/avatar1.jpg' />
          <Link
            to={'/'}
            style={{ textDecoration: 'none' }}
            onClick={handleLogout}
          >
            Logout
          </Link>
        </Stack>
      </div>
    </Stack>
  );
}
