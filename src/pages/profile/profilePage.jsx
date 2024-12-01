import React, { useState } from "react";
import axios from "axios";



const ProfilePage = () => {
    const [name, setName] = useState("");

    if(localStorage.getItem("email")){
        axios.get(`http://localhost:3000/getUser/${localStorage.getItem("email")}`, {
          headers:{
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          }
        })
        .then((res) => {
          console.log(res.data);
          setName(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      else{
        window.location.href = "/signup";
      }
    return (
        <>
            <div id="absoluteBox">
                <div className="loginImagem"></div>
                <div id="loginFormDiv">
                    <h1>Olá, {name ? name : null}</h1>
                    <button onClick={
                        () => {
                            localStorage.removeItem("email");
                            localStorage.removeItem("password");
                            window.location.href = "/";
                        }
                    }>Sair</button>
                </div>
            </div>
        </>
    )
};

export default ProfilePage;