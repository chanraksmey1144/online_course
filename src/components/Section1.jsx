// src/components/Section1.jsx
import { Link } from "react-router-dom";
import { useCourses } from "../context/CourseProvider"; // NEW: Import context hook

// Import all course images (paths assumed correct)
import Course1 from "../assets/html.jpg";
import Course2 from "../assets/css.jpg";
import Course3 from "../assets/bootstrapt.jpg";
import Course4 from "../assets/javascript.jpg";
import Course5 from "../assets/react.jpg";
import Course6 from "../assets/tailwind.jpg";
import Course7 from "../assets/jquery.jpg";
import Course8 from "../assets/frontend.jpg";
import Course9 from "../assets/api.jpg";
import Course10 from "../assets/github.jpg";

export default function Section1() {
  // Get available course keys from the context
  const { courses: availableCourses } = useCourses();
  const availableCourseKeys = Object.keys(availableCourses);

  // Define all course data
  const allCourses = [
    { id: "html", img: Course1, title: "HTML", desc: "Learn HTML fundamentals and build structured web pages." },
    { id: "css", img: Course2, title: "CSS", desc: "Style beautiful websites using modern CSS techniques." },
    { id: "bootstrap", img: Course3, title: "Bootstrap", desc: "Build responsive websites quickly using Bootstrap." },
    { id: "javascript", img: Course4, title: "JavaScript", desc: "Learn JavaScript and build interactive web applications." },
    { id: "react", img: Course5, title: "React", desc: "Master React and create fast, modern web apps." },
    { id: "tailwind", img: Course6, title: "Tailwind", desc: "Design modern UI using Tailwind's utility-first classes." },
    // These courses are defined in the array but WILL BE FILTERED OUT 
    // because they are missing from CourseProvider.jsx's 'courses' object.
    { id: "jquery", img: Course7, title: "jQuery", desc: "Learn jQuery to manipulate the DOM easily and create animations." },
    { id: "frontend", img: Course8, title: "Frontend ", desc: "Learn frontend development from basics to advanced concepts." },
    { id: "api", img: Course9, title: "API", desc: "Learn how to work with REST APIs and integrate backend data." },
    { id: "github", img: Course10, title: "Git & GitHub", desc: "Master version control and collaborate using GitHub." }
  ];

  // Filter the list to only show courses that are defined in the CourseProvider
  const coursesToRender = allCourses.filter(course => 
    availableCourseKeys.includes(course.id)
  );
  
  return (
    <div className="w-full mt-16">
      {/* --- Popular Courses --- */}
      <section className="px-6 mb-16 text-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-10">
        <h2 className="mb-8 text-3xl font-extrabold text-blue-900 md:text-4xl lg:text-5xl">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coursesToRender.map((course) => ( // Use the filtered list
            <div
              key={course.id}
              className="p-5 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={course.img}
                alt={course.title}
                className="object-cover w-full h-48 rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-blue-900">{course.title}</h3>
              <p className="mt-2 text-gray-600">{course.desc}</p>
              <Link
                to={`/course/${course.id}`}
                className="w-full py-2 mt-4 font-semibold text-white bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 rounded-lg inline-block transition hover:from-purple-600 hover:to-blue-600"
              >
                Learn Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-10 text-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 className="mb-10 text-3xl font-extrabold text-blue-900 md:text-4xl lg:text-5xl">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-3 md:px-12 lg:px-24">
          {/* Feature Card 1 */}
          <div className=" bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 rounded-lg inline-block transition hover:from-purple-600 hover:to-blue-600 p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold text-white">Expert Teachers</h3>
            <p className="text-white text-sm md:text-base">
              Learn from industry professionals with years of experience.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className=" bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 rounded-lg inline-block transition hover:from-purple-600 hover:to-blue-600 p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold text-white">Flexible Learning</h3>
            <p className="text-white text-sm md:text-base">
              Study at your own pace with 24/7 access to materials.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className=" bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 rounded-lg inline-block transition hover:from-purple-600 hover:to-blue-600 p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold text-white">Certification</h3>
            <p className="text-white text-sm md:text-base">
              Earn certificates to boost your career.
            </p>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="text-center py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Ready to start learning?
        </h2>
        <p className="text-white mb-8 text-lg md:text-xl opacity-90 max-w-xl mx-auto">
          Sign up today and explore our wide range of courses, designed for learners of all levels!
        </p>
        <Link
          to="/signup"
          className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition transform hover:-translate-y-1 hover:scale-105 inline-block shadow-lg"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
}