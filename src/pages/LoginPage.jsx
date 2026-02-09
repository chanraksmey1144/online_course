// src/pages/LoginPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
// NOTE: Assuming you will create and import useAuth from context/AuthProvider.jsx
// import { useAuth } from "../context/AuthProvider"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // <--- Added rememberMe state
  // const [error, setError] = useState(null); // Recommended for real apps
  
  const navigate = useNavigate();
  // const { login } = useAuth(); // If using Auth Context

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // setError(null); // Clear errors
    
    // --- Placeholder for actual authentication logic (e.g., API call) ---
    console.log("Attempting to log in with:", { email, password, rememberMe });
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      
      // Replace with API call and Context update logic:
      // try { await login(email, password, rememberMe); navigate("/"); }
      
      alert(`Login successful: ${email}`);
      navigate("/"); 
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 md:p-10 border-t-8 border-blue-600 transform transition-all duration-500 hover:shadow-3xl">
        
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Sign in to continue your learning journey.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={loading} // Disable during loading
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-50 disabled:opacity-70"
              />
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={loading} // Disable during loading
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 disabled:bg-gray-50 disabled:opacity-70"
              />
              {/* REMOVED INCORRECT LABEL HERE: The label for 'Remember me' was removed from this input div */}
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* CORRECTED BLOCK: Remember Me Checkbox and Forgot Password Link */}
          <div className="flex items-center justify-between">
            
            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-lg font-bold rounded-lg shadow-lg transition duration-200 ${
              loading 
                ? "bg-blue-400 text-white cursor-not-allowed" 
                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              <>
                <FiLogIn size={20} />
                Login
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          Need an account?
          <Link to="/signup" className="text-blue-600 font-semibold ml-1 hover:text-blue-800 transition">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}