import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Performance from './pages/Performance';
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
  //   setIsLoggedIn(loggedIn);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        {/* {isLoggedIn && <Route path='/performance' element={<Performance />} />} */}
        <Route
          path='/performance'
          element={
            <PrivateRoute>
              <Performance />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
