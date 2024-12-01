import React, { useState } from "react";
import axios from "axios";
import AvisoDeErro from "../../components/Avisos/avisoDeErro";
import AvisoDeSucesso from "../../components/Avisos/avisoDeSucesso";
import { Link } from "react-router-dom";


const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        var body = {
          name: name,
          email: email,
          password: password,
        }
    
        if (email == confirmEmail && password == confirmPassword) {
          setError("");
          axios
            .post("http://localhost:3000/createUser", 
              body,
              {
              headers:{
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
              }}
            )
            .then((res) => {
              console.log(res);
              setSuccess("Cadastro realizado com sucesso. Redirecionando...");
              localStorage.setItem("email", email);
              localStorage.setItem("password", password);
            })
            .catch((err) => {
              console.log(err);
              if(err.status == 409){
                setError("Email já cadastrado");
              }
              else if(err.status == 404){
                setError("Preencha os dados corretamente");
              }
              else{
                setError("Erro do sistema");
              }
    
            });
        } else {
          setError("Email ou senha não conferem");
        }
      };
    return(
        <>
        <div id="absoluteBox">
          <div className="loginImagem"></div>
          <div id="loginFormDiv">
            <input
              type="text"
              name="username"
              placeholder="Nome Completo"
              onChange={(e) => setName(e.target.value)}
            />
  
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <input
              type="text"
              name="confirmUsername"
              placeholder="Confirme o email"
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
  
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSignupSubmit}>Cadastrar</button>
          <Link to="/login">Já tenho uma conta</Link>
          {success ? <AvisoDeSucesso aviso={success} /> : null}
          {error ? <AvisoDeErro aviso={error} /> : null}
        </div>
      </>
    )
};

export default SignupPage;