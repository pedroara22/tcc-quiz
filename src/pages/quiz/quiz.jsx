import { useState, useEffect } from 'react'
import QuizCard from '../../components/quizCard'
import AvisoDeErro from '../../components/Avisos/avisoDeErro'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Quiz() {
  const [error, setError] = useState('')
  const [quizzes, setQuizzes] = useState([])

  const admin = localStorage.getItem('email') == 'admin@admin.com.br'


  useEffect(() => {
    axios.get('http://localhost:3000/getQuizzes')
      .then((response) => {
        setQuizzes(response.data)
        setError('')
      })
      .catch((err) => {
        setError('Error fetching data')
      })
  }, [])


  if (quizzes.length === 0) {
    return (
      <div id="quizArea">
        <h1>Loading...</h1>
      </div>

    )
  }
  else {
    return (
      <>
        <div id="quizArea">
          {
            quizzes.map((quiz, index) => {
              return (
                <QuizCard key={index} id={quiz._id} name={quiz.name} description={quiz.description} questions={quiz.questions} />
              )
            })
          }
        </div>
        { admin?
          <button>
            <Link to="/createQuiz">Criar quiz</Link>
          </button>
          :null
        }
        {error ? <AvisoDeErro aviso={error} /> : null}
      </>
    )
  }
}

export default Quiz
