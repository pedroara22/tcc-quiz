import data from "../storage/quizes.json";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [quiz, setQuiz] = useState("");
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    data.map((quiz) => {
      if (quiz.id == window.location.pathname.split("").slice(6).join("")) {
        setQuiz(quiz);
      }
    });
  }, []);

  function checkAnswer() {
    let options = document.getElementsByName("option");
    let selectedOption;
    options.forEach((option) => {
      if (option.checked) {
        selectedOption = option.value;
      }
    });
    if (selectedOption == quiz.questions[pos].answer) {
      setScore(score + 1);
    } else {
      setLifes(lifes - 1);
    }
    if (lifes == 0) {
      window.location.href = "/gameover";
    }
    if (pos == quiz.questions.length - 1) {
      window.location.href = "/end";
    }
    setPos(pos + 1);
  }
  
  if (quiz=="") {
    return <h1>Loading...</h1>;
  } 
  else {
    return (
      <div id="quizPageDiv">
        <div id="quizQuestions">
          {
            /** draw a red heart for each life and one gray heeart for each lost life */
            Array.from(Array(lifes).keys()).map(() => {
              return <img src="/heart.png" width={20} />;
            })
            /** Gray hearts */
            

          }
          {quiz.questions[pos].question}
          {quiz.questions[pos].options.map((option) => {
            return (
              <div id="quizOptions" onClick={()=>{
                document.getElementById("option"+option).checked = true;
              }}>
                <input type="radio" name="option" id={"option"+option} value={option}  />
                <label id="optionLabel">{option}</label>
              </div>
            );
          })}
          <button onClick={checkAnswer}>Next</button>
        </div>
      </div>
    );
  }
}
