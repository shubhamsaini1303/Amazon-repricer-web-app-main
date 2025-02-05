import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { name, email, mobile, password };

    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}${process.env.USER_BASE_URL}/sign-up`, 
        data
      );
      
      if (response.data.status === 1) {
        navigate('/verify'); // Navigate to verification page
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (err) {
      setError('There was an error registering!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full text-white bg-[#775DDE] py-2 rounded-md text-lg font-semibold transition-all transform hover:scale-105 focus:ring-2 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account? 
          <Link to={"/sign-in"}  className="text-blue-500 hover:underline">Sign In
          {/* <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a> */}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
