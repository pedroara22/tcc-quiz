import { useEffect, useState } from "react";
import styles from './createQuiz.module.css';
import { Link } from "react-router-dom";
import axios from "axios";

const EditQuizQuestions = () => {
    const [quizQuestions, setQuizQuestions] = useState(JSON.parse(localStorage.getItem('quiz')).questions);
    const [cQuestion, setCQuestion] = useState({
        question: '',
        options: ['','','',''],
        answer: '',
    });

    const [error, setError] = useState('');

    const [name, setName] = useState(JSON.parse(localStorage.getItem('quiz')).name);
    const [description, setDescription] = useState(JSON.parse(localStorage.getItem('quiz')).description);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('quiz')) != quizQuestions) {
            localStorage.setItem('quiz', JSON.stringify({ ...JSON.parse(localStorage.getItem('quiz')), questions: quizQuestions }));
        }
    }, [quizQuestions]);
    function deleteQuestion(index) {
        setQuizQuestions(quizQuestions.filter((question, i) => i != index));
    }
    return (
        <div>
            <div id={styles.body}>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value);
                    localStorage.setItem('quiz', JSON.stringify({ ...JSON.parse(localStorage.getItem('quiz')), name: e.target.value }));
                }} />
                <input type="text" value={description} onChange={(e) => {
                    setDescription(e.target.value);
                    localStorage.setItem('quiz', JSON.stringify({ ...JSON.parse(localStorage.getItem('quiz')), description: e.target.value }));
                }} />
                <h3>Perguntas</h3>
                <div id={styles.questionCardArea}>
                    {
                        //Perguntas já existentes

                        quizQuestions.map((question, index) => {
                            return <div key={index} id={styles.questionCard}>
                                <Link to={`/createOptions/${index}`}>
                                <h4>Pergunta {index + 1}</h4>
                                </Link>
                                <input type="text" value={question.question} name="questionInput" onChange={(e) => {
                                    setQuizQuestions(quizQuestions.map((q, i) => i == index ? { ...q, question: e.target.value } : q));
                                }} />
                                <button onClick={() => deleteQuestion(index)}>Deletar</button>
                                <div id={styles.buttonsArea}>
                                    <button id={styles.previous} onClick={() => {
                                        if (index != 0) {
                                            let temp = quizQuestions[index];
                                            quizQuestions[index] = quizQuestions[index - 1];
                                            quizQuestions[index - 1] = temp;
                                            setQuizQuestions([...quizQuestions]);
                                        }
                                    }
                                    }>{"<"}</button>
                                    <button id={styles.next} onClick={() => {
                                        if (index != quizQuestions.length - 1) {
                                            let temp = quizQuestions[index];
                                            quizQuestions[index] = quizQuestions[index + 1];
                                            quizQuestions[index + 1] = temp;
                                            setQuizQuestions([...quizQuestions]);
                                        }
                                    }
                                    }>{">"}</button>
                                </div>
                            </div>
                        })
                        // Adicionar pergunta
                    }
                </div>
            </div>
            <button onClick={
                () => { quizQuestions[0] == "" ? setQuizQuestions([cQuestion]) : setQuizQuestions([...quizQuestions, cQuestion]); }
            }>
                Adicionar pergunta
            </button>
            <button onClick={
                ()=>{
                    var body = JSON.parse(localStorage.getItem('quiz'));
                    console.log(body)


                    body.authorId = '6747afe5759403fc3740e09c'
                    axios.post('http://localhost:3000/updateQuiz', body, {
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": "*",
                        }
                    })
                    .then((res)=>{
                        console.log(res);
                        localStorage.removeItem('quiz');
                        window.location.href = '/quiz';
                    })
                    .catch((err)=>{
                        console.log(err);
                        
                    });
                    
                }
            }>
                Salvar quiz
            </button>
            {error ? <h1>{error}</h1> : null}

        </div>
    );
}

export default EditQuizQuestions;