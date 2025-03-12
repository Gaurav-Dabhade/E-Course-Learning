import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isAuthIn, setIsAuthIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.email || !formData.password) {
      setError('Both fields are required.');
      return;
    }

    if (
      formData.email === localStorage.getItem('email') &&
      formData.password === localStorage.getItem('password')
    ) {
      localStorage.setItem('userLoggedIn', 'true');
      navigate('/performance');
    } else {
      setError('Please Enter correct Credentials..');
    }
  };

  const handleClear = () => {
    setFormData({
      email: '',
      password: '',
    });
    setError('');
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        {error && <Alert variant='warning'>{error}</Alert>}
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            value={formData.email}
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            value={formData.password}
            name='password'
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Login
        </button>
        <button onClick={handleClear} className='btn btn-primary m-3'>
          Clear
        </button>
      </form>
    </div>
  );
}
