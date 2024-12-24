import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../components/AuthForm'; // Adjust the path as necessary
import Landing from './Landing';

const Login = ({ setIsAuthenticated }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    localStorage.removeItem('formData');
  };

  const handleAuth = async (formData, setErrors) => {
    const url = isSignUp
      ? 'http://localhost:5000/users'
      : `http://localhost:5000/users?email=${formData.email}`;

    try {
      if (isSignUp) {
        await axios.post(url, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else {
        const { data } = await axios.get(url);

        if (data.length === 0 || data[0].password !== formData.password) {
          setErrors({ email: 'Username and password incorrect' });
          return;
        }
      }

      setIsAuthenticated(true);
      updateUserData({
        name: formData.name,
        email: formData.email,
        phone: '+20-01274318900', // Placeholder phone number
        address: '285 N Broad St, Elizabeth, NJ 07208, USA', // Placeholder address
      });
      localStorage.removeItem('formData');
      navigate('/body/home');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const updateUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handlePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-darkGrey">
      {/* Navbar */}
      <nav className="bg-background shadow-lg fixed top-0 z-50 w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My App</h1>
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-300"
            onClick={handlePopup}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handlePopup}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>
            <AuthForm
              isSignUp={isSignUp}
              handleAuth={handleAuth}
              updateUserData={updateUserData}
            />
            <p className="text-center text-sm text-gray-600 mt-4">
              {isSignUp ? (
                <>
                  Already a user?{' '}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  New user?{' '}
                  <button
                    onClick={toggleForm}
                    className="text-orange-400 hover:underline focus:outline-none"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
      <Landing />
    </div>
  );
};

export default Login;
