import { useState } from 'react';
import styles from './conheca.module.css';
import { Link } from 'react-router-dom';
const FirstPage = () => {
    const [count, setCount] = useState(0)
    if(count==0){
    return (
        <div id={styles.TextsBox}>
            <h1>Contextualização</h1>
            <div id={styles.Texts}>
                <div id={styles.text}><h3 id={styles.h3}>Para o que serve a política?</h3>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).
                </div>
                <div id={styles.text}><h3 id={styles.h3}>Direitos e deveres </h3>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</div>
                <div id={styles.text}><h3 id={styles.h3}>Por que é importante?</h3>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).
                </div>
            </div>
            <button onClick={()=>setCount(1)}id={styles.nextButton}>Continua</button>
        </div>
    );
}
else{
    return (
        <div id={styles.TextsBox}>
            <h1>Contextualização</h1>
            <div id={styles.Texts}>
                <div id={styles.text}><h3 id={styles.h3}>Os três Poderes</h3>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).
                </div>
                <div id={styles.text}><h3 id={styles.h3}>Questões eleitorais</h3>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</div>
                <div id={styles.text}><h3 id={styles.h3}>O que é democracia   </h3>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).
                </div>
            </div>
            <Link to="/quiz" id={styles.nextLink} ><button>Quiz</button></Link>
        </div>
    );
}
}
export default FirstPage;