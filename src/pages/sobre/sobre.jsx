import { Link } from 'react-router-dom';
import styles from './sobre.module.css';
import ab1 from '/ab1.png';
import ab2 from '/ab2.png';

const Sobre = () => {
    return (
        <div id={styles.sobre}>

            <div id={styles.column}>
                <img src={ab1} alt="ab1" />
                <img src={ab2} alt="ab2" />
            </div>
            <div id={styles.column}>
                <h1>Sobre</h1>
                <p>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</p>
            <Link to="/equipe"><button >Equipe</button></Link>
            </div>


        </div>
    );
}

export default Sobre;