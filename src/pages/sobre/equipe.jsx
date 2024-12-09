import styles from './sobre.module.css';
import e1 from '/e1.svg';
import e2 from '/e2.png';
import e3 from '/e3.svg';
import e4 from '/e4.svg';
import cefetImg from '/cefet.png';

const Equipe = () => {
    return (
        <>
        <div id={styles.equipe}>
            <div id={styles.row}>
            <div id={styles.backgroundBox}></div>
            <h1 id={styles.h1}>Desenvolvedores</h1>
            </div>
            <div id={styles.row}>
                <div id={styles.eqColumn}>
                    <img src={e1} alt="e1" />
                    <p>Mirella Loiola</p><p>Discente</p><p>mirellaloiola2788@gmail.com</p></div>
                <div id={styles.eqColumn}>
                    <img src={e2} alt="e2" />
                    <p>Vitória Souza</p> <p>Discente</p><p>vitoriasouzag190@gmail.com</p></div>
                <div id={styles.eqColumn}>
                    <img src={e3} alt="e3" />
                    <p>Eduardo Habib</p><p>Orientador</p><p>habib@cefetmg.br</p></div>
                <div id={styles.eqColumn}>
                    <img src={e4} alt="e4" />
                    <p>Flávio Giarola</p><p>Coorientador</p><p>flaviogiarola@cefetetmg.br</p></div>
            </div>
        </div>
            <div id={styles.lastRow}>
                <img src={cefetImg} alt="cefet" />
            </div>
            </>
    );
}
export default Equipe;