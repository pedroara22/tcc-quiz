import { useState } from 'react'
import data from './storage/quizes.json'
import './App.css'
import QuizCard from './components/quizCard'
import AvisoDeErro from './components/avisoDeErro'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')

  function handleData(){
    if(data.length === 0){
      setError('No data to show')
    }
  }

  

  return (
    <>
    <div id="quizArea">
      {
      data.map((quiz, index) => {
        return (
          <Link to={`/quiz/${index}`} key={index} >
            <QuizCard key={index} id={index} name={quiz.name} description={quiz.description} questions={quiz.questions} />
          </Link>
        )
      })}
      </div>
      {error?<AvisoDeErro aviso={error} />:null}
    </>
  )
}

export default App
