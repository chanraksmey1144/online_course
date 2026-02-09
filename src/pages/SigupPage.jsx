// src/pages/SignUpPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiUserPlus } from "react-icons/fi";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    // --- Placeholder for actual registration logic (e.g., API call) ---
    console.log("Attempting to sign up with:", { fullName, email, password });
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      
      // In a real app, you would receive the authentication token here.
      // For this example, we simulate success and redirect to the HOME page.
      alert(`Registration successful! Welcome, ${fullName}.`);
      navigate("/"); // <--- FIXED: Navigating to the home page (/)
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 md:p-10 border-t-8 border-red-600 transform transition-all duration-500 hover:shadow-3xl">
        
        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-2">
          Start Learning Today
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Create your free account in seconds.
        </p>

        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nam Nam"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              />
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
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
                placeholder="your****@email.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
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
                placeholder="Minimum 6 characters"
                minLength="6"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              />
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition duration-150"
              />
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-lg font-bold rounded-lg shadow-lg transition duration-200 ${
              loading 
                ? "bg-red-400 text-white cursor-not-allowed" 
                : "bg-red-600 text-white hover:bg-red-700 hover:shadow-xl"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Registering...
              </>
            ) : (
              <>
                <FiUserPlus size={20} />
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="text-red-600 font-semibold ml-1 hover:text-red-800 transition">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}