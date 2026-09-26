import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, Lock, EyeOff, CheckCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@safebite.com');
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
          <p className="text-gray-600 mb-12 max-w-md text-lg">
            Monitor, manage and make a difference. SafeBite admin portal helps you keep food safer for everyone.
          </p>

          <div className="flex gap-8 mb-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary">
                <ShieldCheck size={24} />
              </div>
              <span className="text-sm font-medium text-center">Better<br/>Food Safety</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary">
                <User size={24} />
              </div>
              <span className="text-sm font-medium text-center">Healthier<br/>Communities</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary">
                <CheckCircle size={24} />
              </div>
              <span className="text-sm font-medium text-center">A Safer<br/>Tomorrow</span>
            </div>
          </div>
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
            <p className="text-gray-500">Sign in to access the SafeBite admin dashboard.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <div className="input-icon-wrapper">
                <User className="input-icon-left" size={20} />
                <input 
                  type="email" 
                  className="input-field input-with-icon" 
                  placeholder="Username / Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded border-gray-300" defaultChecked />
                <span className="text-gray-700 font-medium">Remember me</span>
              </label>
              <a href="#" className="text-primary font-medium hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary w-full py-3 text-lg mb-6">
              Login &rarr;
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button type="button" className="btn btn-outline w-full py-3 text-gray-700 font-medium">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </form>
          
          <div className="mt-12 text-center text-xs text-gray-500">
            &copy; 2025 SafeBite. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
