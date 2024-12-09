import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./quizPage.module.css";

export default function QuizPage() {
  const [quiz, setQuiz] = useState("");
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/getQuiz/" + window.location.pathname.split("").slice(6).join("")).then((response) => {
      setQuiz(response.data);
    });
  }, []);
  function selectFunction(index) {
    var selected = document.getElementById("option" + index).classList;
    if (selected.contains(styles.unselectedOption)) {
      selected.remove(styles.unselectedOption);
      selected.add(styles.selectedOption);
      for (let i = 0; i < quiz.questions[pos].options.length; i++) {
        if (i != index) {
          document.getElementById("option" + i).classList.remove(styles.selectedOption);
          document.getElementById("option" + i).classList.add(styles.unselectedOption);
        }
      }
    } else {
      selected.remove(styles.selectedOption);
      selected.add(styles.unselectedOption);
    }
  }

  function checkAnswer() {
    let selectedOption = document.getElementsByClassName(styles.selectedOption)[0].innerHTML;
    if (selectedOption == quiz.questions[pos].answer) {
      setScore(score + 1);
    } else {
      var ended = true;
      if (lifes==1) {
        window.location.href = "/gameover";
      }
      setLifes(lifes - 1);
    }
    if (pos == quiz.questions.length - 1 && !ended) {
      window.location.href = `/endgame/${score+1}`;
    }
    setPos(pos + 1);
  }

  if (quiz == "") {
    return <h1>Carregando...</h1>;
  }
  else {

    return (
      <div className={styles.quizPageDiv}>
        <div id="quizQuestions">
          <div>
            Pontuação
          </div>
          <div className={styles.score}>
            {score}
          </div>
          <div className={styles.hearts}>
            {
              /** draw a red heart for each life and one gray heeart for each lost life */
              Array.from(Array(lifes).keys()).map(() => {
                return <img src="/heart.png" width={40} />;
              })
              /** draw (3-red hearts) Gray hearts  */
            }
            {
              Array.from(Array(3 - lifes).keys()).map(() => {
                return <img src="/heartGray.png" width={40} />;
              })
            }
          </div>
          <div className={styles.question}>
            {quiz.questions[pos].question}
          </div>


          <div className={styles.questions}>
            {quiz.questions[pos].options.map((option, index) => {
              return (
                <div className={`${styles.quizOptions} ${styles.unselectedOption}`} id={"option" + index} onClick={() => { selectFunction(index) }} key={index}>
                  {option}
                </div>
              );
            })}
          </div>
          <button onClick={checkAnswer}>Next</button>
        </div>
      </div>
    );
  }
}
