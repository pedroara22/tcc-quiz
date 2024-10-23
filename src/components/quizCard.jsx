export default function QuizCard({id, name, description, questions}) { 
    return (
      <div id="quizCard" key={id+'100012'}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>{questions.length} perguntas</h2>
      </div>
    )

}