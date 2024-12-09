import React, { useEffect, useState } from "react";
import axios from "axios";
import AvisoDeErro from "../../components/Avisos/avisoDeErro";
import AvisoDeSucesso from "../../components/Avisos/avisoDeSucesso";
import { Link } from "react-router-dom";


const EditProfilePage = () => {

    

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

    axios.get(`http://localhost:3000/getUser/${localStorage.getItem("email")}`, {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        }
    })
        .then((res) => {
            setId(res.data._id);
            setName(res.data.name);
            setEmail(res.data.email);
            setConfirmEmail(res.data.email);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleEditProfileSubmit = (e) => {
        e.preventDefault();
        var body = {
          id,
          name,
          email,
          password,
        }
    
        if (email == confirmEmail && password == confirmPassword) {
          setError("");
          axios
            .post("http://localhost:3000/updateUser", 
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
              if(window.location.pathname == "/EditProfile/createQuiz"){
                window.location.href = "/createQuiz";
              }
              else{
                window.location.href = "/login";
              }
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
          <div className="loginImagem"><img src="/profile.jpeg" width={80} /></div>
          <div id="signupFormDiv">
            <input
              type="text"
              name="username"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
  
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
                disabled
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <input
              type="text"
              name="confirmUsername"
              placeholder="Confirme o email"
              disabled
              value={confirmEmail}
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
          <button onClick={handleEditProfileSubmit}>Editar Perfil</button>
          {success ? <AvisoDeSucesso aviso={success} /> : null}
          {error ? <AvisoDeErro aviso={error} /> : null}
        </div>
      </>
    )
};

export default EditProfilePage;