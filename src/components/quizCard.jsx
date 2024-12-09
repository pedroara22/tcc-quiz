import { Link } from "react-router-dom";
import NavBar from "./Layout/navBar";
import axios from "axios";

export default function QuizCard({ id, name, description, questions }) {
  var admin = false;
  if (localStorage.getItem("email") == "admin@admin.com.br") {
    admin = true;
  }
  return (
    <>
      <div id="quizCard" key={id + '100012'}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>{questions.length} perguntas</h2>
        <button id="answerQuiz">
        <Link to={`/quiz/${id}`}>Responder Quiz</Link>
        </button>
        {
          admin ? <button onClick={() => {
            localStorage.setItem("quiz", JSON.stringify({ id, name, description, questions }));
            window.location.href = "/editQuiz";
          }}>Editar</button> : null
        }
        {
          admin ? <button onClick={() => {
            var body = {
              id
            };
            axios.post('http://localhost:3000/deleteQuiz', body, {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
              }
            })
              .then((res) => {
                console.log(res);
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          }}>Apagar quiz</button> : null}
      </div>
    </>
  )

}