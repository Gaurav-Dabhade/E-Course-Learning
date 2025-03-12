import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

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
    setSuccess('');

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone
    ) {
      setError('All fields are required.');
      return;
    }
    if (
      localStorage.getItem('email') === FormData.email &&
      localStorage.getItem('password') === formData.password
    ) {
      setError('User already exist');
    } else {
      localStorage.setItem('email', formData.email);
      localStorage.setItem('password', formData.password);

      setSuccess('Registration successful!');
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
    });
    setError('');
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        {error && <Alert variant='warning'>{error}</Alert>}
        {success && <Alert variant='success'>{success}</Alert>}
        <div className='mb-3'>
          <label className='form-label'>Full Name</label>
          <input
            type='text'
            className='form-control'
            value={formData.name}
            name='name'
            onChange={handleChange}
          />
        </div>

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
        <div className='mb-3'>
          <label className='form-label'>Phone Number</label>
          <input
            type='tel'
            className='form-control'
            value={formData.phone}
            name='phone'
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-success'>
          Register
        </button>
        <button onClick={handleClear} className='btn btn-primary m-3'>
          Clear
        </button>
      </form>
    </div>
  );
}
