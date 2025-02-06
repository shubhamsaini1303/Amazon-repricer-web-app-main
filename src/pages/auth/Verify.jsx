import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Ensure only numbers are input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const otpCode = otp.join('');
    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}${process.env.USER_BASE_URL}/verify-otp`,
        { otp: otpCode }
      );

      if (response.data.status === 1) {
        navigate('/sign-in'); // Redirect after successful OTP verification
      } else {
        setError(response.data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('There was an error verifying the OTP!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Verify OTP</h2>
        <p className="text-center font-bold mt-4 text-gray-800">Please Enter Your Verification Code</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="flex justify-between mt-4">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center text-2xl border rounded-md focus:ring focus:ring-[#775DDE]"
                required
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-[#775DDE] py-2 rounded-md text-lg font-semibold transition-all transform hover:scale-105 focus:ring-2 focus:ring-offset-2 "
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
