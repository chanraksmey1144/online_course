import { createContext, useContext, useMemo } from "react";

// 1. Create the Context
const CourseContext = createContext(null);

// Utility function to find course by ID
const findCourseById = (courses, id) => {
  return courses[id];
};

// 2. Define the Provider Component
export function CourseProvider({ children }) {
  // Define the core course data for ALL courses
  const allCourseData = useMemo(() => ({
    "html": {
      title: "HTML Complete Course",
      description: "Master the structure of the web with the latest HTML5 standards and semantic elements.",
      slug: "html",
      lessons: [
        { id: 1, title: "Introduction to HTML", duration: "10 mins", video: "https://www.youtube.com/embed/it1rTvBcfRg" },
        { id: 2, title: "HTML Tags and Elements", duration: "15 mins", video: "https://www.youtube.com/embed/vIoO52MdZFE" },
        { id: 3, title: "HTML Forms", duration: "20 mins", video: "https://www.youtube.com/embed/VLeERv_dR6Q" },
        { id: 4, title: "HTML Tables", duration: "15 mins", video: "https://www.youtube.com/embed/e62D-aayveY" },
        { id: 5, title: "HTML Semantic Elements", duration: "20 mins", video: "https://www.youtube.com/embed/i3li3qBTIEY" },
        { id: 6, title: "HTML Multimedia", duration: "10 mins", video: "https://www.youtube.com/embed/eWb8o0jC9dE" },
      ],
      quiz: [
        { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], answer: 0 },
        { id: 2, question: "Which tag defines a paragraph?", options: ["<p>", "<div>", "<span>"], answer: 0 },
        { id: 3, question: "Which tag is used to embed an image?", options: ["<image>", "<img>", "<picture>"], answer: 1 },
        { id: 4, question: "What is the correct HTML element for the largest heading?", options: ["<head>", "<h6>", "<h1>"], answer: 2 },
        { id: 5, question: "Which attribute is used to specify an alternate text for an image?", options: ["title", "alt", "src"], answer: 1 },
        { id: 6, question: "Which HTML element is used to create a clickable link?", options: ["<link>", "<a>", "<href>"], answer: 1 },
        { id: 7, question: "How can you open a link in a new tab/browser window?", options: ["target='_blank'", "new_tab='true'", "window='new'"], answer: 0 },
        { id: 8, question: "Which element is used for an unordered list?", options: ["<ul>", "<ol>", "<li>"], answer: 0 },
        { id: 9, question: "Which tag is used to define a table row?", options: ["<tr>", "<td>", "<th>"], answer: 0 },
        { id: 10, question: "Which tag is used to define a table header?", options: ["<th>", "<td>", "<tr>"], answer: 0 },
        { id: 11, question: "Which tag is used to define a hyperlink?", options: ["<a>", "<link>", "<href>"], answer: 0 },
        { id: 12, question: "Which attribute is used to define inline styles?", options: ["style", "class", "id"], answer: 0 },
        { id: 13, question: "Which tag is used to display a video?", options: ["<video>", "<media>", "<movie>"], answer: 0 },
        { id: 14, question: "Which element is used to define the footer of a page?", options: ["<footer>", "<bottom>", "<section>"], answer: 0 },
        { id: 15, question: "Which HTML element is used to group block-elements and format them with CSS?", options: ["<div>", "<span>", "<section>"], answer: 0 },
        { id: 16, question: "Which tag defines emphasized text?", options: ["<i>", "<em>", "<strong>"], answer: 1 },
        { id: 17, question: "Which tag defines a line break?", options: ["<hr>", "<br>", "<break>"], answer: 1 },
        { id: 18, question: "Which tag is self-closing?", options: ["<div>", "<p>", "<img>"], answer: 2 },
        { id: 19, question: "Correct DOCTYPE for HTML5?", options: ["<!DOCTYPE html5>", "<!HTML5>", "<!DOCTYPE html>"], answer: 2 },
        { id: 20, question: "Which element contains page metadata?", options: ["<meta>", "<head>", "<title>"], answer: 1 },
        { id: 21, question: "Which tag defines bold text?", options: ["<b>", "<strong>", "<bold>"], answer: 1 },
        { id: 22, question: "Which input type is for email?", options: ["text-email", "email", "mail"], answer: 1 },
        { id: 23, question: "Which tag creates a dropdown list?", options: ["<input>", "<select>", "<option>"], answer: 1 },
        { id: 24, question: "Which element groups form inputs?", options: ["<form>", "<fieldset>", "<group>"], answer: 1 },
        { id: 25, question: "Which tag defines a section of navigation links?", options: ["<menu>", "<nav>", "<navigate>"], answer: 1 },
        { id: 26, question: "Which tag is used to embed audio?", options: ["<sound>", "<audio>", "<mp3>"], answer: 1 },
        { id: 27, question: "Which attribute disables an input?", options: ["readonly", "disabled", "stop"], answer: 1 },
        { id: 28, question: "Which attribute sets the source for <video>?", options: ["src", "source", "href"], answer: 0 },
        { id: 29, question: "Which tag defines inline text?", options: ["<div>", "<span>", "<section>"], answer: 1 },
        { id: 30, question: "Which element represents independent content?", options: ["<article>", "<section>", "<aside>"], answer: 0 }
      ]
    },
    "css": {
      title: "CSS Complete Course",
      description: "Dive deep into responsive design, Flexbox, and Grid, mastering the art of styling.",
      slug: "css",
      lessons: [
        { id: 1, title: "Intro to CSS", duration: "10 mins", video: "https://www.youtube.com/embed/AGDDdsiZ0Ko" },
        { id: 2, title: "CSS Selectors", duration: "15 mins", video: "https://www.youtube.com/embed/ZNskBxLVOfs" },
        { id: 3, title: "CSS Box Model", duration: "25 mins", video: "https://www.youtube.com/embed/qvx2SZzoqqQ" },
        { id: 4, title: "CSS Flexbox", duration: "30 mins", video: "https://www.youtube.com/embed/wsTv9y931o8" },
        { id: 5, title: "CSS Grid", duration: "30 mins", video: "https://www.youtube.com/embed/v0o1kV-qfVI" },
        { id: 6, title: "CSS Transitions & Animations", duration: "20 mins", video: "https://www.youtube.com/embed/xdap5e3-DwM" },
      ],
      quiz: [
        { id: 1, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Style System"], answer: 0 },
        { id: 2, question: "Which property changes text color?", options: ["font-color", "color", "text-color"], answer: 1 },
        { id: 3, question: "Which CSS layout is based on rows and columns?", options: ["Flexbox", "Grid", "Float"], answer: 1 },
        { id: 4, question: "Which property is used to change the background color?", options: ["background-color", "bgcolor", "color"], answer: 0 },
        { id: 5, question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size"], answer: 2 },
        { id: 6, question: "How do you make a list not display bullets?", options: ["list-style: none;", "bullet: none;", "list: hide;"], answer: 0 },
        { id: 7, question: "Which pseudo-class applies styles when the user hovers over an element?", options: [":hover", ":active", ":focus"], answer: 0 },
        { id: 8, question: "How do you select an element with id 'header'?", options: ["#header", ".header", "header"], answer: 0 },
        { id: 9, question: "How do you select elements with class 'menu'?", options: [".menu", "#menu", "menu"], answer: 0 },
        { id: 10, question: "Which property is used to change the spacing between letters?", options: ["letter-spacing", "word-spacing", "text-spacing"], answer: 0 },
        { id: 11, question: "How do you make text bold in CSS?", options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;"], answer: 0 },
        { id: 12, question: "Which property is used to control the transparency of an element?", options: ["opacity", "transparent", "filter"], answer: 0 },
        { id: 13, question: "Which property is used to add space inside an element?", options: ["margin", "padding", "spacing"], answer: 1 },
        { id: 14, question: "Which property is used to add space outside an element?", options: ["margin", "padding", "border"], answer: 0 },
        { id: 15, question: "Which property is used to set the width of a border?", options: ["border-width", "border-style", "border-size"], answer: 0 },
        { id: 16, question: "Which property changes font type?", options: ["font-style", "font-family", "font-weight"], answer: 1 },
        { id: 17, question: "Which property changes line height?", options: ["line-height", "height", "text-height"], answer: 0 },
        { id: 18, question: "Which property sets element position?", options: ["position", "locate", "align"], answer: 0 },
        { id: 19, question: "Which property centers text?", options: ["text-align", "align-text", "justify"], answer: 0 },
        { id: 20, question: "Which value makes an element block?", options: ["display: block;", "block: show;", "element: block;"], answer: 0 },
        { id: 21, question: "How to make rounded corners?", options: ["corner-radius", "border-radius", "round-corner"], answer: 1 },
        { id: 22, question: "Which value makes an element flexible?", options: ["flex: 1;", "display: flex;", "flex-mode: on;"], answer: 1 },
        { id: 23, question: "Which property adds drop shadows?", options: ["box-shadow", "shadow", "element-shadow"], answer: 0 },
        { id: 24, question: "Which property controls stacking order?", options: ["z-index", "stack-order", "layer"], answer: 0 },
        { id: 25, question: "Which property controls element visibility?", options: ["visibility", "hidden", "display"], answer: 0 },
        { id: 26, question: "Which property repeats a background image?", options: ["background-repeat", "image-repeat", "repeat-bg"], answer: 0 },
        { id: 27, question: "Which property controls animation speed?", options: ["animation-duration", "speed", "duration"], answer: 0 },
        { id: 28, question: "Which property is used for gradients?", options: ["background-image", "gradient", "bg-gradient"], answer: 0 },
        { id: 29, question: "Which unit is relative to font size?", options: ["px", "em", "%"], answer: 1 },
        { id: 30, question: "Which CSS property makes text uppercase?", options: ["text-transform", "text-case", "capitalize"], answer: 0 },
      ],
    },
    "bootstrap": {
      title: "Bootstrap Complete Course",
      description: "Use the world's most popular framework for building responsive, mobile-first sites.",
      slug: "bootstrap",
      lessons: [
        { id: 1, title: "Bootstrap Intro", duration: "10 mins", video: "https://www.youtube.com/embed/O_9u1P5YjVc" },
        { id: 2, title: "Grid System", duration: "20 mins", video: "https://www.youtube.com/embed/Wqu-d_b3K-0" },
        { id: 3, title: "Bootstrap Components", duration: "25 mins", video: "https://www.youtube.com/embed/-XqB4K16Y38" },
        { id: 4, title: "Bootstrap Utilities", duration: "15 mins", video: "https://www.youtube.com/embed/gwdui6LZQDs" },
      ],
      quiz: [
        { id: 1, question: "What is Bootstrap?", options: ["CSS Framework", "Browser", "OS"], answer: 0 },
        { id: 2, question: "Bootstrap uses a grid system of how many columns?", options: ["12", "10", "16"], answer: 0 },
        { id: 3, question: "Which class is used to create a responsive container in Bootstrap?", options: [".container", ".container-fluid", ".container-responsive"], answer: 1 },
        { id: 4, question: "Which class is used to create a primary button?", options: [".btn-primary", ".btn-main", ".button-primary"], answer: 0 },
        { id: 5, question: "Which class hides content on small screens?", options: [".d-none", ".d-sm-none", ".hidden-sm"], answer: 1 },
        { id: 6, question: "Which class adds margin or padding in Bootstrap?", options: [".m-1 / .p-1", ".margin-1 / .padding-1", ".mp-1"], answer: 0 },
        { id: 7, question: "Which class is used to create a navigation bar?", options: [".navbar", ".nav", ".navigation"], answer: 0 },
        { id: 8, question: "Which class makes an image responsive?", options: [".img-responsive", ".img-fluid", ".img-scale"], answer: 1 },
        { id: 9, question: "Which class is used to align text center?", options: [".text-center", ".center-text", ".align-center"], answer: 0 },
        { id: 10, question: "Bootstrap supports which JavaScript library?", options: ["jQuery", "React", "Angular"], answer: 0 },
      ],
    },
    "javascript": {
      title: "JavaScript Complete Course",
      description: "Learn the programming language of the web, from variables to asynchronous code and ES6 features.",
      slug: "javascript",
      lessons: [
        { id: 1, title: "JS Basics", duration: "15 mins", video: "https://www.youtube.com/embed/zofMnllkVfI" },
        { id: 2, title: "Variables & Data Types", duration: "20 mins", video: "https://www.youtube.com/embed/7qpE9rjfDXo" },
        { id: 3, title: "Functions", duration: "25 mins", video: "https://www.youtube.com/embed/NGokVVuG4sM" },
        { id: 4, title: "DOM Manipulation", duration: "30 mins", video: "https://www.youtube.com/embed/y17RuWkWdn8" },
        { id: 5, title: "Events & Event Listeners", duration: "20 mins", video: "https://www.youtube.com/embed/XF1_MlZ5l6M" },
        { id: 6, title: "Arrays & Array Methods", duration: "25 mins", video: "https://www.youtube.com/embed/R8rmfD9Y5-c" },
        { id: 7, title: "Objects & Object Methods", duration: "20 mins", video: "https://www.youtube.com/embed/PFmuCDHHpwk" },
        { id: 8, title: "ES6 Features (let, const, arrow functions)", duration: "25 mins", video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
      ],
      quiz: [
        { id: 1, question: "Which keyword declares a variable?", options: ["var", "let", "const"], answer: 1 },
        { id: 2, question: "How do you select an element by ID?", options: ["getElementById", "querySelector", "getElementsByClassName"], answer: 0 },
        { id: 3, question: "Which method logs output to the console?", options: ["console.print()", "console.log()", "print()"], answer: 1 },
        { id: 4, question: "How do you write a comment in JavaScript?", options: ["// Comment", "/* Comment */", "Both"], answer: 2 },
        { id: 5, question: "Which operator is used for strict equality?", options: ["==", "=", "==="], answer: 2 },
      ],
    },
    "react": {
      title: "React JS Mastery",
      description: "Build interactive user interfaces with functional components and hooks.",
      slug: "react",
      lessons: [
        { id: 1, title: "Introduction to Components", duration: "20 mins", video: "https://www.youtube.com/embed/QjrVjB49M1Y" },
        { id: 2, title: "State and Props", duration: "30 mins", video: "https://www.youtube.com/embed/m7OWCtp778E" },
        { id: 3, title: "Working with Hooks", duration: "40 mins", video: "https://www.youtube.com/embed/hQ7C0u6fK9Y" },
      ],
      quiz: [
        { id: 1, question: "What is a 'Hook' in React?", options: ["A state library", "Functions to use state and lifecycle", "A special component"], answer: 1 },
        { id: 2, question: "JSX stands for...", options: ["JavaScript XML", "JSON Extension", "JavaScript Extension"], answer: 0 },
      ],
    },
    "tailwind": {
      title: "Tailwind CSS Utility",
      description: "A utility-first CSS framework for rapid UI development.",
      slug: "tailwind",
      lessons: [
        { id: 1, title: "The Utility-First Concept", duration: "10 mins", video: "https://www.youtube.com/embed/ft30DS7D_uQ" },
        { id: 2, title: "Responsive Design with Utilities", duration: "15 mins", video: "https://www.youtube.com/embed/nUas2XwW09c" },
      ],
      quiz: [
        { id: 1, question: "Tailwind CSS is best described as a...", options: ["Component Library", "Utility-First Framework", "CSS Preprocessor"], answer: 1 },
        { id: 2, question: "Which class centers an element in Tailwind?", options: ["align-center", "text-center", "mx-auto"], answer: 2 },
      ],
    },
    "jquery": {
      title: "jQuery Basics",
      description: "Simplify client-side HTML scripting and DOM manipulation with jQuery.",
      slug: "jquery",
      lessons: [
        { id: 1, title: "Selecting and Manipulating Elements", duration: "15 mins", video: "https://www.youtube.com/embed/BWX7hL276-8" },
        { id: 2, title: "Handling Events", duration: "10 mins", video: "https://www.youtube.com/embed/G-POtu9J-m4" },
      ],
      quiz: [
        { id: 1, question: "The jQuery library begins with what symbol?", options: ["@", "#", "$"], answer: 2 },
      ],
    },
    "frontend": {
      title: "Complete Frontend Development",
      description: "A comprehensive path covering HTML, CSS, JS, and modern frameworks.",
      slug: "frontend",
      lessons: [
        { id: 1, title: "The Modern Frontend Stack", duration: "20 mins", video: "https://www.youtube.com/embed/NnL7F7j1vQc" },
        { id: 2, title: "Tooling and Build Systems", duration: "30 mins", video: "https://www.youtube.com/embed/uGv_O5_rNTo" },
      ],
      quiz: [
        { id: 1, question: "Which tool is typically used to bundle JS?", options: ["NPM", "Vite", "Babel"], answer: 1 },
      ],
    },
    "api": {
      title: "REST API Integration",
      description: "Learn how to fetch, send, and handle data using asynchronous JavaScript and REST APIs.",
      slug: "api",
      lessons: [
        { id: 1, title: "What is an API?", duration: "10 mins", video: "https://www.youtube.com/embed/GZvjP5dF7_w" },
        { id: 2, title: "Using the Fetch API", duration: "25 mins", video: "https://www.youtube.com/embed/Oive66jrwbs" },
      ],
      quiz: [
        { id: 1, question: "Which HTTP method retrieves data?", options: ["POST", "PUT", "GET"], answer: 2 },
      ],
    },
    "github": {
      title: "Git & GitHub Version Control",
      description: "Master essential Git commands for collaborative coding and source control.",
      slug: "github",
      lessons: [
        { id: 1, title: "Git Basics and Initialization", duration: "15 mins", video: "https://www.youtube.com/embed/apJ9fG4tBno" },
        { id: 2, title: "Branching and Pull Requests", duration: "30 mins", video: "https://www.youtube.com/embed/oPpnCh7InLY" },
      ],
      quiz: [
        { id: 1, question: "Which command uploads local changes?", options: ["git commit", "git pull", "git push"], answer: 2 },
      ],
    },
  }), []);

  // 3. Prepare the value for the context
  const value = useMemo(() => ({
    courses: allCourseData,
    getCourse: (id) => findCourseById(allCourseData, id),
  }), [allCourseData]);

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
}

// 4. Custom Hook for easy consumption
export function useCourses() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
}