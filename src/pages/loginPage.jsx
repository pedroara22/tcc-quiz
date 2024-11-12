import React, { useState } from "react";
import AvisoDeErro from "../components/avisoDeErro";
import AvisoDeSucesso from "../components/avisoDeSucesso";
import axios from "axios";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [loginPage, setLoginPage] = useState(false);
  const [lemail, setLemail] = useState(localStorage.getItem("email"));
  const [lpassword, setLpassword] = useState(localStorage.getItem("password"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [name, setName] = useState("");

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
      .then((res) => {
        console.log(res);
        setSuccess("Login realizado com sucesso. Redirecionando...");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        setLemail(email);
        setLpassword(password)
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if(lemail){
    axios.get(`http://localhost:3000/getUser/${lemail}`, {
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

  if(!lemail && !loginPage){
    return (
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
          <a onClick={()=>{setLoginPage(true)}}>Já tenho uma conta</a>
          {success ? <AvisoDeSucesso aviso={success} /> : null}
          {error ? <AvisoDeErro aviso={error} /> : null}
        </div>
      </>
    );
  }
  else if(loginPage && !lemail){
    return (
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
        </div>
      </>
    );
  }
  else if(lemail){
    return(
      /** profile page */
      <>
        <div id="absoluteBox">
          <div className="loginImagem"></div>
          <div id="loginFormDiv">
            <h1>Olá, {name?name:null}</h1>
            <button onClick={
              ()=>{
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                setLemail(null);
              }
            }>Sair</button>
          </div>
        </div>
      </>
    )
  }
}
