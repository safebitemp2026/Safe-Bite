import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, Lock, EyeOff, CheckCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-banner">
        <div className="login-banner-content">
          <div className="flex items-center gap-3 mb-12">
            <ShieldCheck size={40} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SafeBite</h1>
              <p className="text-sm text-gray-600">Admin Management Portal</p>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-primary mb-4 leading-tight">
            Safer Food.<br/>
            <span className="text-success">Healthier Lives.</span>
          </h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center gap-3 mb-6">
              <ShieldCheck size={40} className="text-primary" />
              <span className="text-3xl font-bold text-gray-900">SafeBite</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h2>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <div className="input-icon-wrapper">
                <User className="input-icon-left" size={20} />
                <input 
                  type="text" 
                  className="input-field input-with-icon" 
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-icon-wrapper">
                <Lock className="input-icon-left" size={20} />
                <input 
                  type="password" 
                  className="input-field input-with-icon" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full py-3 text-lg mb-6">
              Login &rarr;
            </button>
          </form>
          
          <div className="mt-12 text-center text-xs text-gray-500">
            &copy; 2026 SafeBite. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
