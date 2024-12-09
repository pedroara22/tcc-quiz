import { useState } from "react";
import styles from './createQuiz.module.css';
import axios from "axios";
import CreateQuizQuestions from "./createQuizQuestions";

const CreateQuiz = () => {
    const [quiz, setQuiz] = useState({
        name: '',
        description: '',
        questions: [],
        authorId: '',
    });

    const [quizer, setQuizer] = useState(localStorage.getItem('quiz'));



    const createQuiz = async () => {
        if (quiz.name == '' || quiz.description == '') {
            alert('Preencha todos os campos');
            return;
        }
        if (localStorage.getItem('quiz') != null) {
            localStorage.removeItem('quiz');
        }
        localStorage.setItem('quiz', JSON.stringify(quiz));
        setQuizer(localStorage.getItem('quiz'));
    }

    if (quizer == null) {
        return (
            <div>
                <h1>Crie seu quiz</h1>
                <div>
                    <label htmlFor="quizName">Nome do quiz:</label>
                    <input id="quizName" className={styles.input} onChange={(e) => {
                        setQuiz({ ...quiz, name: e.target.value });
                    }} />
                    <label htmlFor="quizDescription">Descrição do quiz:</label>
                    <input id="quizDescription" className={styles.input} onChange={(e) => {
                        setQuiz({ ...quiz, description: e.target.value });
                    }} />
                    <button onClick={() => createQuiz()}>Criar</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <CreateQuizQuestions />
        )
    }
}
export default CreateQuiz;