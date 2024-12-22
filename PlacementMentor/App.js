import React, { useState } from "react";
import "./App.css";

const questions = {
  "Software Engineer": [
    {
      id: 1,
      question: "What does OOP stand for?",
      type: "MCQ",
      options: [
        "Object-Oriented Programming",
        "Original Object Process",
        "Object Output Processing",
      ],
      answer: "Object-Oriented Programming",
    },
    {
      id: 2,
      question: "What is the output of 5 + 3 * 2?",
      type: "Numerical",
      options: [],
      answer: "11",
    },
    {
      id: 3,
      question: "What is a constructor in Java?",
      type: "MCQ",
      options: [
        "A method to initialize an object",
        "A destructor",
        "A static method",
      ],
      answer: "A method to initialize an object",
    },
    {
      id: 4,
      question: "What does HTTP stand for?",
      type: "MCQ",
      options: ["HyperText Transfer Protocol", "Hyper Transfer Text Program"],
      answer: "HyperText Transfer Protocol",
    },
    {
      id: 5,
      question: "What is 2^4?",
      type: "Numerical",
      options: [],
      answer: "16",
    },
    {
      id: 6,
      question: "Which language is used for Android development?",
      type: "MCQ",
      options: ["Java", "Python", "Ruby"],
      answer: "Java",
    },
    {
      id: 7,
      question: "What is the binary representation of 10?",
      type: "Numerical",
      options: [],
      answer: "1010",
    },
    {
      id: 8,
      question: "Which of these is a version control system?",
      type: "MCQ",
      options: ["Git", "JIRA", "Slack"],
      answer: "Git",
    },
    {
      id: 9,
      question: "How many bits are in a byte?",
      type: "Numerical",
      options: [],
      answer: "8",
    },
    {
      id: 10,
      question: "What is an array?",
      type: "MCQ",
      options: ["A collection of elements", "A type of loop"],
      answer: "A collection of elements",
    },
  ],
  "Data Scientist": [
    {
      id: 11,
      question: "What is overfitting in machine learning?",
      type: "MCQ",
      options: [
        "High training accuracy, low testing accuracy",
        "Low training accuracy, high testing accuracy",
      ],
      answer: "High training accuracy, low testing accuracy",
    },
    {
      id: 12,
      question: "What is the mean of 10, 20, and 30?",
      type: "Numerical",
      options: [],
      answer: "20",
    },
    {
      id: 13,
      question: "What is a decision tree?",
      type: "MCQ",
      options: ["A tree-like model used in ML", "A data cleaning method"],
      answer: "A tree-like model used in ML",
    },
    {
      id: 14,
      question: "What does CSV stand for?",
      type: "MCQ",
      options: ["Comma Separated Values", "Centralized Standard View"],
      answer: "Comma Separated Values",
    },
    {
      id: 15,
      question: "What is 5 factorial (5!)?",
      type: "Numerical",
      options: [],
      answer: "120",
    },
    {
      id: 16,
      question: "Which of these is a Python library for data analysis?",
      type: "MCQ",
      options: ["Pandas", "React", "Flask"],
      answer: "Pandas",
    },
    {
      id: 17,
      question: "What is the output of 2+2?",
      type: "Numerical",
      options: [],
      answer: "4",
    },
    {
      id: 18,
      question: "What is the standard deviation of [10, 10, 10]?",
      type: "Numerical",
      options: [],
      answer: "0",
    },
    {
      id: 19,
      question: "Which plot is best for visualizing distributions?",
      type: "MCQ",
      options: ["Histogram", "Pie chart", "Line chart"],
      answer: "Histogram",
    },
    {
      id: 20,
      question: "Which metric measures model accuracy?",
      type: "MCQ",
      options: ["Mean Squared Error", "Loss", "Accuracy"],
      answer: "Accuracy",
    },
  ],
  "UI/UX Designer": [
    {
      id: 21,
      question: "What does UX stand for?",
      type: "MCQ",
      options: ["User Experience", "User Extension", "Unified Experience"],
      answer: "User Experience",
    },
    {
      id: 22,
      question: "What is wireframing?",
      type: "MCQ",
      options: ["Creating a blueprint for a design", "Coding a website"],
      answer: "Creating a blueprint for a design",
    },
    {
      id: 23,
      question: "Which tool is used for UI design?",
      type: "MCQ",
      options: ["Figma", "Excel", "Photoshop"],
      answer: "Figma",
    },
    {
      id: 24,
      question: "What does UI stand for?",
      type: "MCQ",
      options: ["User Interface", "Universal Integration"],
      answer: "User Interface",
    },
    {
      id: 25,
      question: "What is the primary focus of UX design?",
      type: "MCQ",
      options: ["User satisfaction", "Server optimization"],
      answer: "User satisfaction",
    },
    {
      id: 26,
      question: "Which color model is used for digital screens?",
      type: "MCQ",
      options: ["RGB", "CMYK"],
      answer: "RGB",
    },
    {
      id: 27,
      question: "What does Figma help with?",
      type: "MCQ",
      options: ["Design collaboration", "Database management"],
      answer: "Design collaboration",
    },
    {
      id: 28,
      question: "What is prototyping?",
      type: "MCQ",
      options: ["Creating interactive design mockups", "Writing code"],
      answer: "Creating interactive design mockups",
    },
    {
      id: 29,
      question: "Which is a common UX research method?",
      type: "MCQ",
      options: ["User interviews", "Server logs"],
      answer: "User interviews",
    },
    {
      id: 30,
      question: "What does accessibility in design mean?",
      type: "MCQ",
      options: ["Designing for all users", "Coding for performance"],
      answer: "Designing for all users",
    },
  ],
  "ML Engineer": [
    {
      id: 31,
      question: "What is a neural network?",
      type: "MCQ",
      options: [
        "A set of algorithms modeled after the human brain",
        "A cloud network",
      ],
      answer: "A set of algorithms modeled after the human brain",
    },
    {
      id: 32,
      question: "What is backpropagation?",
      type: "MCQ",
      options: [
        "A method to train neural networks",
        "A type of data visualization",
      ],
      answer: "A method to train neural networks",
    },
    {
      id: 33,
      question: "What is the purpose of dropout in neural networks?",
      type: "MCQ",
      options: ["To reduce overfitting", "To speed up training"],
      answer: "To reduce overfitting",
    },
    {
      id: 34,
      question: "What is the activation function used for?",
      type: "MCQ",
      options: ["To introduce non-linearity", "To perform data augmentation"],
      answer: "To introduce non-linearity",
    },
    {
      id: 35,
      question: "Which of these is an unsupervised learning method?",
      type: "MCQ",
      options: ["K-means clustering", "Linear regression"],
      answer: "K-means clustering",
    },
    {
      id: 36,
      question: "What is the loss function in ML?",
      type: "MCQ",
      options: [
        "A function to measure prediction error",
        "A data visualization method",
      ],
      answer: "A function to measure prediction error",
    },
    {
      id: 37,
      question: "Which framework is used for ML?",
      type: "MCQ",
      options: ["TensorFlow", "React"],
      answer: "TensorFlow",
    },
    {
      id: 38,
      question: "What is transfer learning?",
      type: "MCQ",
      options: ["Reusing a pre-trained model", "Training from scratch"],
      answer: "Reusing a pre-trained model",
    },
    {
      id: 39,
      question: "What is the role of data augmentation?",
      type: "MCQ",
      options: ["To increase training data size", "To delete data"],
      answer: "To increase training data size",
    },
    {
      id: 40,
      question: "What is a confusion matrix?",
      type: "MCQ",
      options: [
        "A performance measurement for classification",
        "A clustering algorithm",
      ],
      answer: "A performance measurement for classification",
    },
  ],
};

function App() {
  const [role, setRole] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setAnswers({});
    setScore(null);
  };

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    let count = 0;
    questions[role].forEach((q) => {
      if (
        answers[q.id] &&
        answers[q.id].toString().trim() === q.answer.toString().trim()
      ) {
        count++;
      }
    });
    setScore(count);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>Aptitude Test</h1>
      <button
        onClick={toggleDarkMode}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginBottom: "20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: darkMode ? "#555" : "#4A90E2",
          color: "#fff",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <label>Select Job Role:</label>
      <select value={role} onChange={handleRoleChange}>
        <option value="">Select Role</option>
        {Object.keys(questions).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      {role && (
        <div>
          {questions[role].map((q) => (
            <div key={q.id} className="question-box">
              <p>{q.question}</p>
              {q.type === "MCQ" ? (
                <select
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                >
                  <option value="">Select Answer</option>
                  {q.options.map((opt, index) => (
                    <option key={index} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                />
              )}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {score !== null && (
        <h2>
          Your Score: {score} / {questions[role].length}
        </h2>
      )}
    </div>
  );
}

export default App;
