// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
// Import icons for a more professional social media section
import { FiFacebook, FiTwitter, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reusable link style for clean maintenance
  const linkStyle = "hover:text-indigo-400 hover:underline transition duration-200 ease-in-out";
  const externalLinkStyle = "hover:text-indigo-400 hover:text-white transition duration-200 ease-in-out";

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* 1. Brand / Mission (Col 1) */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Course<span className="text-indigo-500">Frontend</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering global developers with top-tier, certified online courses. Learn, build, and grow your career with confidence.
          </p>
        </div>

        {/* 2. Primary Navigation (Col 2) */}
        <div>
          <h3 className="text-white font-bold mb-5 uppercase tracking-wider text-xs border-b border-gray-700 pb-2">Courses & Community</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className={linkStyle}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/content" className={linkStyle}>All Courses</NavLink>
            </li>
            <li>
              <NavLink to="/team" className={linkStyle}>Our Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={linkStyle}>Developer Blog</NavLink>
            </li>
          </ul>
        </div>

        {/* 3. Utility & Legal (Col 3) */}
        <div>
          <h3 className="text-white font-bold mb-5 uppercase tracking-wider text-xs border-b border-gray-700 pb-2">Legal & Support</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/content" className={linkStyle}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/policy" className={linkStyle}>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms" className={linkStyle}>Terms of Service</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={linkStyle}>FAQ & Help Center</NavLink>
            </li>
          </ul>
        </div>

        {/* 4. Contact & Social (Col 4) */}
        <div>
          <h3 className="text-white font-bold mb-5 uppercase tracking-wider text-xs border-b border-gray-700 pb-2">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FiMail size={16} className="text-indigo-500 shrink-0"/>
              <a 
                  href="mailto:chanraksmey1144@gmal.com" 
                  className={externalLinkStyle}
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  chanraksmey1144@gmal.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone size={16} className="text-indigo-500 shrink-0"/>
              <a 
                  href="tel:+855884335629" // Use E.164 format for telephone links
                  className={externalLinkStyle}
              >
                  088 433 56 29
              </a>
            </li>
          </ul>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-indigo-500 transition duration-200" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-indigo-500 transition duration-200" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-500 transition duration-200" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700/50 py-4 text-center text-gray-500 text-xs">
        &copy; {currentYear} CoursePro. All Rights Reserved. | <span className="font-semibold text-indigo-400">Excellence in Developer Education</span>
      </div>
    </footer>
  );
};

export default Footer;