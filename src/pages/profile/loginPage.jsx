import React, { useContext, useState } from "react";
import AvisoDeErro from "../../components/Avisos/avisoDeErro";
import AvisoDeSucesso from "../../components/Avisos/avisoDeSucesso";
import axios from "axios";
import { Link } from "react-router-dom";
import SignupPage from "./signupPage";
var apiURL = "http://localhost:3000/";

export default function LoginPage() {
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [loginPage, setLoginPage] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");
    var body = {
      email: email,
      password: password,
    }
    axios
      .post("http://localhost:3000/checkPassword", 
        body,
        {
          headers:{
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          }}
      )
      .then(async (res) => {
        console.log(res);
        setSuccess("Login realizado com sucesso. Redirecionando...");
        function setLocalStorage(){
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          window.location.href = "/profile";
        }
        setTimeout(setLocalStorage, 500);
      })
      .catch((err) => {
        console.log(err);
        if(err.status == 401){
          setError("Email ou senha incorretos");
        }
        else if(err.status == 404){
          setError("Preencha os dados corretamente");
        }
        else{
          setError("Erro do sistema");
        }
      });
  };
  if(!localStorage.getItem("email")){
    return(
    <>
    <div id="absoluteBox">
      <div className="loginImagem"></div>
      <div id="loginFormDiv">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLoginSubmit}>Login</button>
      {success ? <AvisoDeSucesso aviso={success} /> : null}
      {error ? <AvisoDeErro aviso={error} /> : null}
    <Link to="/signup">Ainda não tenho uma conta</Link>
    </div>
  </>
    );
  }
  else{
    window.location.href = "/profile";
  }
}
