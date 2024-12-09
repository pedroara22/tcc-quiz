
const Gameover = () => {
    return (
        <div>
        <h1>Suas vidas acabaram</h1>
        <a onClick={()=>{history.back()}}><h2>Tente novamente</h2></a>
        
        <a href="/">Back to home</a>
        </div>
    );
    }
export default Gameover;