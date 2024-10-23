import data from "../storage/quizes.json";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [quiz, setQuiz] = useState("");

  useEffect(() => {
    data.map((quiz) => {
      if (quiz.id == window.location.pathname.split("").slice(6).join("")) {
        setQuiz(quiz);
      }
    });
  }, []);
  
  if (quiz=="") {
    return <h1>Loading...</h1>;
  } 
  else {
    return (
      <div id="quizPageDiv">
        <h1>{quiz.name}</h1>
        <p>{quiz.description}</p>
        <div id="quizQuestions">
          {quiz.questions.map((question, index) => {
            return (
              <div key={index} id="quizQuestion">
                <h2>{question.question}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
