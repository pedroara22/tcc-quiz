import { useState } from 'react';
import styles from './projeto.module.css';
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';



const Projeto = () => {
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)

    return (
        <div id={styles.paginaDiv}>
            <div id={styles.paginas}>
                <div id={styles.pagina} style={{ marginLeft: (1-page)*100+"vw" }}>
                    <FirstPage />
                </div>
                <div id={styles.pagina}>
                    <SecondPage />
                </div>
                <div id={styles.pagina}>
                    <ThirdPage />
                </div>
            </div>
            <div id={styles.pageNumberBar}>
                <div id='pageNumber'>
                    <button id={styles.button} onClick={() => setPage(1)}>1</button>
                    <button id={styles.button} onClick={() => setPage(2)}>2</button>
                    <button id={styles.button} onClick={() => setPage(3)}>3</button>
                    <button id={styles.button} onClick={() => {
                        if(page < 3 ){
                            setPage(page + 1)
                        }
                        else if(!localStorage.getItem('email')){
                            window.location.href = '/signup'
                        }
                        else{
                            window.location.href = '/profile'
                        }
                    }}>{
                        page<3?"Proxima":localStorage.getItem("email")? 'Acesse seu perfil' : 'Crie uma conta'
                    }</button>
                </div>
                <div id={styles.pageNumberSelector} style={{ marginLeft: page * 40 - 40 }}>
                </div>
            </div>
        </div>
    );
}

export default Projeto;