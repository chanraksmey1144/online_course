// src/pages/CoursePage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCourses } from "../context/CourseProvider"; 

export default function CoursePage() {
  const { courseId } = useParams();
  const { courses } = useCourses(); 
  const navigate = useNavigate();

  // Normalize the URL parameter to match the object keys (e.g., 'Html' -> 'html')
  const courseKey = courseId.toLowerCase();
  const course = courses[courseKey];

  // 1. Course Not Found Check
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-12 flex justify-center items-start">
        <h1 className="text-4xl font-extrabold text-red-600 bg-white p-8 rounded-xl shadow-lg mt-20">
          Course "<span className="italic">{courseId}</span>" not found
        </h1>
      </div>
    );
  }

  // Destructure course content
  const { title, lessons, quiz } = course;

  // 2. State Management for Lesson and Quiz
  const [currentLesson, setCurrentLesson] = useState(lessons[0].id); // Track active lesson
  const [userAnswers, setUserAnswers] = useState({}); // Stores user's selected option index per question ID
  const [showCorrectness, setShowCorrectness] = useState(false); // Used to show green/red borders on options
  const [showScore, setShowScore] = useState(false); // Toggles between quiz-taking and score-display modes
  const [score, setScore] = useState(0); // Final score

  // Find the video URL for the currently active lesson
  const currentLessonData = lessons.find((l) => l.id === currentLesson);
  const currentVideoUrl = currentLessonData?.video;
  
  // 3. Quiz Handlers
  const handleAnswer = (qid, idx) => {
    // Prevent changing answers after submission
    if (showScore) return; 
    setUserAnswers({ ...userAnswers, [qid]: idx });
  };

  const calculateScore = () => {
    let s = 0;
    // Check user's answer against the correct answer (answer index)
    quiz.forEach((q) => {
      if (userAnswers[q.id] === q.answer) s++;
    });
    setScore(s);
    setShowCorrectness(true); // Show visual feedback on options
    setShowScore(true); // Switch to score display view
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowCorrectness(false);
    setShowScore(false);
    setScore(0);
  };

  // 4. Component Render
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-5 py-2 text-lg bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800 transition duration-200 flex items-center"
      >
        <span className="mr-2">←</span> Back to Courses
      </button>

      <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-10 border-b-4 border-blue-500 pb-3">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Lessons */}
        <div className="md:w-1/4 bg-white rounded-xl shadow-xl p-6 h-fit md:sticky md:top-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Lessons</h2>
          <ul className="space-y-3">
            {lessons.map((lesson) => (
              <li
                key={lesson.id}
                className={`p-4 rounded-xl cursor-pointer border-l-6 transition duration-200 ease-in-out text-base ${
                  currentLesson === lesson.id
                    ? "bg-blue-100 border-blue-600 font-bold text-blue-800 shadow-md"
                    : "border-transparent hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => {
                  setCurrentLesson(lesson.id);
                  // Optional: Reset quiz view if user navigates lessons, 
                  // or keep current state if they return to quiz later.
                  // resetQuiz(); 
                }}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Main Content (Video & Quiz) */}
        <div className="md:w-3/4 flex flex-col gap-10">
          
          {/* Video Player Section */}
          <div className="bg-white rounded-xl shadow-2xl p-6">
              <p className="mb-4 text-2xl font-bold text-gray-700 text-center">
                Currently Watching: <span className="text-blue-600">{currentLessonData?.title}</span>
              </p>
              {/* The main container for the video embed */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border-4 border-blue-500">
                {/* Check if we have a URL, then embed it using an iframe */}
                {currentVideoUrl ? (
                    <iframe
                      title={currentLessonData?.title || 'Course Lesson'}
                      src={currentVideoUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600 font-semibold">
                        Video Not Available
                    </div>
                )}
              </div>
          </div>


          {/* Quiz Section */}
          <div className="bg-white rounded-xl shadow-2xl p-6 border-t-8 border-green-500">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
              Test Your Knowledge 🧠
            </h2>

            {/* Quiz Questions/Submission View */}
            {!showScore && (
              <div>
                {quiz.map((q, index) => (
                  <div
                    key={q.id}
                    className="mb-6 p-5 bg-gray-50 rounded-lg shadow-md border-l-4 border-blue-400"
                  >
                    <p className="font-bold text-xl mb-3 text-gray-700">
                      {index + 1}. {q.question}
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {q.options.map((opt, idx) => {
                        const selected = userAnswers[q.id] === idx;
                        
                        // Conditional classes for option buttons
                        let classes = "p-3 rounded-lg text-left border-2 transition duration-150 ease-in-out text-base font-medium";

                        if (showCorrectness) {
                          // This block only runs after submitting *but before* showing the final score details
                          const correct = idx === q.answer;
                          if (correct) {
                              // Correct answer is always green
                            classes += " bg-green-100 border-green-500 text-green-700";
                          } else if (selected) {
                            // Selected WRONG answer is red
                            classes += " bg-red-100 border-red-500 text-red-700";
                          } else {
                            // Unselected wrong answers are neutral
                            classes += " border-gray-200 text-gray-600";
                          }
                        } else {
                          // This block runs BEFORE submission
                          if (selected) {
                            classes += " bg-blue-200 border-blue-600 text-blue-800 shadow-inner";
                          } else {
                            classes += " border-gray-300 hover:bg-gray-100 text-gray-700";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            className={classes}
                            onClick={() => handleAnswer(q.id, idx)}
                            disabled={showScore} // Disable button interaction after scoring
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="text-center mt-8">
                  <button
                    onClick={calculateScore}
                    disabled={Object.keys(userAnswers).length !== quiz.length}
                    className={`px-8 py-3 text-xl rounded-xl font-bold transition duration-300 ease-in-out shadow-lg ${
                      Object.keys(userAnswers).length === quiz.length
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Submit Quiz
                  </button>
                    {Object.keys(userAnswers).length !== quiz.length && (
                        <p className="mt-2 text-sm text-red-500">
                            Please answer all questions to submit. ({Object.keys(userAnswers).length} / {quiz.length} answered)
                        </p>
                    )}
                </div>
              </div>
            )}

            {/* Score Display and Detailed Feedback View */}
            {showScore && (
              <div className="mt-6">

                {/* Detailed feedback */}
                {quiz.map((q) => {
                  const correctIdx = q.answer;
                  const userIdx = userAnswers[q.id];
                  const isCorrect = userIdx === correctIdx;
                  
                  return (
                    <div
                      key={q.id}
                      className={`mb-4 p-5 rounded-lg shadow-lg border-l-8 ${isCorrect ? "bg-green-50 border-green-600" : "bg-red-50 border-red-600"}`}
                    >
                      <p className="font-bold text-xl mb-3 text-gray-800">
                        {q.question}
                      </p>
                      <p className="text-lg font-semibold text-green-700 mb-1">
                        ✔️ Correct Answer: <span className="font-bold">{q.options[correctIdx]}</span>
                      </p>
                      
                      {userIdx !== undefined && (
                          <p className={`text-lg font-semibold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                            {isCorrect ? '✅' : '❌'} Your Answer: <span className="font-bold">{q.options[userIdx]}</span> {isCorrect ? "(Correct)" : "(Incorrect)"}
                          </p>
                      )}
                      {userIdx === undefined && (
                        <p className="text-lg font-semibold text-gray-600">
                            - No Answer Provided
                        </p>
                      )}
                    </div>
                  );
                })}
                
                
                {/* Score Box based on performance */}
                 <div className="mt-6">
                  {score === quiz.length ? (
                    <div className="text-center p-8 bg-green-50 border-4 border-green-400 rounded-xl shadow-2xl mb-8">
                      <p className="text-3xl font-extrabold text-green-700">
                        🎉 Perfect Score! {score} / {quiz.length}
                      </p>
                      <p className="text-xl text-green-600 mt-2">Outstanding work!</p>
                    </div>
                  ) : score >= quiz.length / 2 ? (
                    <div className="text-center p-8 bg-yellow-50 border-4 border-yellow-400 rounded-xl shadow-2xl mb-8">
                      <p className="text-3xl font-extrabold text-yellow-700">
                        👍 Good Job! {score} / {quiz.length}
                      </p>
                      <p className="text-xl text-yellow-600 mt-2">Keep up the great effort!</p>
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-red-50 border-4 border-red-400 rounded-xl shadow-2xl mb-8">
                      <p className="text-3xl font-extrabold text-red-700">
                        ✍️ Keep Practicing! {score} / {quiz.length}
                      </p>
                      <p className="text-xl text-red-600 mt-2">Review the lessons and try again!</p>
                    </div>
                  )}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={resetQuiz}
                    className="px-8 py-3 text-xl bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition duration-300 shadow-lg"
                  >
                    Try Quiz Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}