import { useEffect, useState } from "react";
import styles from './createQuiz.module.css';

const CreateOptions = () => {
    const [options, setOptions] = useState(JSON.parse(localStorage.getItem('quiz')).questions[window.location.pathname.split('/')[2]].options);

    const alternativeNum = window.location.pathname.split('/')[2];

    var [correctAnswer, setCorrectAnswer] = useState(JSON.parse(localStorage.getItem('quiz')).questions[alternativeNum].answer);

    console.log(correctAnswer);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('quiz')).questions[alternativeNum].options != options) {
            var q = JSON.parse(localStorage.getItem('quiz'))
            q.questions[alternativeNum].options = options;
            console.log(q); 
            localStorage.setItem('quiz', JSON.stringify(q));
        }
    }, [options]);

    const markAsAnswer = (value) => {
        setCorrectAnswer(value);
        var q = JSON.parse(localStorage.getItem('quiz'));
        q.questions[alternativeNum].answer = value;
        localStorage.setItem('quiz', JSON.stringify(q));
        console.log(q)

    }

    return (
        <div>
            {options.map((option, index) => (
                <>
                    <input
                        key={option.index}
                        value={option}
                        type="text"
                        onChange={(e) => {
                            setOptions(
                                options.map((o, v) =>
                                    v === index ? e.target.value : o
                                )
                            );
                        }}
                    />
                    <button id={option?option==correctAnswer?styles.correctAnswer:null:null} onClick={() => markAsAnswer(option)}>Alternativa correta</button>
                </>

            ))}
        </div>
    );
}
export default CreateOptions;