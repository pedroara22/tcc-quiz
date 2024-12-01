import { useState, useEffect } from 'react'
import QuizCard from '../../components/quizCard'
import AvisoDeErro from '../../components/Avisos/avisoDeErro'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Quiz() {
  const [error, setError] = useState('')
  const [quizzes, setQuizzes] = useState([])

  
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
                <Link to={`/quiz/${quiz._id}`} key={index} >
                  <QuizCard key={index} id={index} name={quiz.name} description={quiz.description} questions={quiz.questions} />
                </Link>
              )
            })
          }
        </div>
        {error ? <AvisoDeErro aviso={error} /> : null}
      </>
    )
  }
}

export default Quiz
