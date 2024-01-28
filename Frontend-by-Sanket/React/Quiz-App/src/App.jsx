import { useState } from "react";
import "./App.css";

function App() {
  let [currentQuestions, setCurrentQuestion] = useState(0);

  const quizQuestions = [
    {
      question: "What is the complexity of binary search ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: true },
        { answer: "O(nlog)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is the complexity of linear search ?",
      options: [
        { answer: "O(n)", isCorrect: true },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is the complexity of mergesort ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: true },
        { answer: "O(1)", isCorrect: false },
      ],
    },
  ];

  return <div></div>;
}

export default App;
