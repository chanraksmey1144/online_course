// src/pages/Home.jsx
import { useState, useEffect } from "react";
// Import Link for navigation
import { Link } from "react-router-dom"; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

export default function Home() {
  const words = [
    "Welcome To Our Frontend Online Course."
    
  ];

  const typingSpeed = 150;
  const deleteSpeed = 50;
  const delayBeforeAction = 1500;

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // If the words array only has one item, it will stop deleting and just blink
          if (words.length === 1) return; 
          
          setTimeout(() => setIsDeleting(true), delayBeforeAction);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  const cursorClass =
    isDeleting || charIndex < words[wordIndex].length
      ? "animate-blink"
      : "opacity-0";

  return (
    <section className="relative h-[700px] w-full flex items-center justify-center text-center px-4 md:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 overflow-hidden">

      {/* Animated background blobs (Tailwind classes for animation assumed) */}
      <div className="absolute inset-0">
        <div className="absolute top-[0%] left-[5%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[40%] right-[-5%] w-80 h-80 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-delay-4000"></div>
      </div>

      {/* Floating frontend icons */}
      <FaHtml5 className="absolute text-orange-500/70 text-7xl top-[10%] left-[5%] md:left-[15%] animate-float1 z-0" />
      <FaCss3Alt className="absolute text-blue-500/70 text-7xl top-[15%] right-[5%] md:right-[15%] animate-float2 z-0" />
      <FaJsSquare className="absolute text-yellow-400/70 text-7xl bottom-[20%] left-[5%] md:left-[10%] animate-float3 z-0" />
      <FaReact className="absolute text-cyan-400/70 text-7xl bottom-[10%] right-[5%] md:right-[20%] animate-float4 z-0" />

      {/* Main content */}
      <div className="relative max-w-4xl text-white z-10 p-4 bg-black/20 rounded-xl backdrop-blur-sm shadow-2xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter drop-shadow-xl min-h-[100px] md:min-h-[120px]">
          {displayText}
          <span
            className={`inline-block w-1.5 bg-white h-full ml-1 align-top ${cursorClass}`}
          >
            &nbsp;
          </span>
        </h1>
        <p className="text-xl md:text-3xl mb-12 font-light opacity-95 drop-shadow-md">
          Join thousands of learners and master modern frontend development with high-quality, project-based courses.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Using Link for navigation to the courses page */}
          <Link 
                to="/content" // Directing the user to the course listing page
                className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-xl shadow-2xl shadow-yellow-500/50 hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.05]"
            >
            Start Learning Today
          </Link>
        </div>
      </div>
    </section>
  );
}