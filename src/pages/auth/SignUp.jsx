
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };

    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}${process.env.USER_BASE_URL}/sign-up`,
        data
      );

      if (response.data.status === 1) {
        toast.success('Registration successful! Redirecting to verification...');
        setTimeout(() => navigate('/verify'), 2000);
      } else {
        toast.error(response.data.message || 'Registration failed');
      }
    } catch (err) {
      toast.error('There was an error registering!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#775DDE] py-2 rounded-md text-lg font-semibold transition-all transform hover:scale-105 focus:ring-2 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account? 
          <Link to="/sign-in" className="text-blue-500 hover:underline"> Sign In</Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Register;
