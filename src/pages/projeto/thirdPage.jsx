import styles from './projeto.module.css';
import s1 from '/s1.webp';
import s2 from '/s2.webp';
import s3 from '/s3.webp';
import s4 from '/s4.webp';
import s5 from '/s5.webp';

const ThirdPage = () => {
    return (
        <div>
            <h1>Soluções</h1>
            <div id={styles.s}>
            <div id={styles.row}>
                <div id={styles.column}>

                    <img src={s1} alt="s1" />
                    <p>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</p>
                </div>
                <div id={styles.column}>
                    <img src={s2} alt="s2" />
                    <p>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</p>
                </div>
                <div id={styles.column}>
                    <img src={s3} alt="s3" />
                    <p>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</p>
                </div>
            </div>
            <div id={styles.row}>
                <div id={styles.column}>
                    <img src={s4} alt="s4" />
                    <p>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</p>
                </div>
                <div id={styles.column}>
                    <img src={s5} alt="s5" />
                    <p>A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores).</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default ThirdPage;
