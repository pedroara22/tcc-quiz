import axios from "axios";

const End = () => {
    var score = window.location.href.split("/").pop();

    axios.get(`http://localhost:3000/getUser/${localStorage.getItem("email")}`, {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        }
    })
        .then((res) => {
            var body = {
                id: res.data._id,
                score: res.data.score + parseInt(score)
            }
            axios.post('http://localhost:3000/updateUser', body, {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                }
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
    return(
        <div>
            <h1>Parabéns, você terminou o quiz!</h1>
            <h2>Veja sua pontuação:</h2>
            <h3>{score} pontos</h3>
            <a href="/">Back to home</a>
        </div>
    )
}
export default End;