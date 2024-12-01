import styles from './projeto.module.css';
import { Link } from 'react-router-dom';
const PrePage = () => {
    return(
        <>
        <h1>Resumo</h1>
        <div id={styles.p1Text}>
        A política brasileira é marcada por um sistema multipartidário, com diversos partidos que representam uma ampla gama de ideologias. As eleições são realizadas a cada dois anos, alternando entre eleições gerais (para Presidente, Governadores, Senadores, Deputados Federais e Estaduais) e municipais (para Prefeitos e Vereadores). Nos últimos anos, a política brasileira tem sido marcada por desafios como corrupção, instabilidade econômica e crises políticas. Escândalos de corrupção, como a Operação Lava Jato, revelaram esquemas complexos envolvendo políticos e empresários, resultando em processos judiciais e prisões. A polarização política também tem se intensificado, com debates acirrados sobre temas como reforma da previdência, direitos humanos e políticas ambientais.
        </div>
        <Link to="/project/1"><button id={styles.nextButton}>Projeto</button></Link>
        </>
    );
}
export default PrePage;