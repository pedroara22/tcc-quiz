import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import formImg from "/profile.jpeg";



const ProfilePage = () => {
  const [uData, setUData] = useState("");

  useEffect(() => {
    if (localStorage.getItem("email")) {
      axios.get(`http://localhost:3000/getUser/${localStorage.getItem("email")}`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        }
      })
        .then((res) => {
          setUData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      window.location.href = "/signup";
    }
  });


  return (
    <>
      <div id="profilePage">

        <h1>Perfil</h1>
        <div id="profilePageBox">
        <div className="loginImagemProfile"><img src={formImg} width={80} /></div>
          <div>
          <div>
            <h2>Apelido</h2>
            <p>{uData.name ? uData.name.split(" ")[0] : null}</p>
          </div>
          <div>
            <h2>Nome</h2>
            <p>{uData.name ? uData.name : null}</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{uData.email ? uData.email : null}</p>
          </div>
          <div>
            <h2>Pontuação</h2>
            <p>{uData.score ? uData.score : 0}</p>
          </div>
          </div>


        </div>
        <button>
          <Link to="/editProfile">Editar Perfil</Link>
        </button>
        <button onClick={
          () => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            window.location.href = "/login";
          }
        }>
          Sair
        </button>

      </div>
    </>
  )
};

export default ProfilePage;