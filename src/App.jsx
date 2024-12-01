import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/profile/loginPage.jsx";
import QuizPage from "./pages/quiz/quizPage.jsx";
import MainLayout from "./components/Layout/mainLayout.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import PrincipalPage from "./pages/principalPage.jsx";
import Quiz from './pages/quiz/quiz.jsx';
import ProfilePage from './pages/profile/profilePage.jsx';
import SignupPage from './pages/profile/signupPage.jsx';
import Projeto from './pages/projeto/projeto.jsx';
import ConhecaPage from './pages/conheca/ConhecaPage.jsx';
import PrePage from './pages/projeto/prePage.jsx';

//api password 7RcYTSP5ZlAWBn22

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><PrincipalPage /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
        <Route path="/quiz" element={<MainLayout><Quiz /></MainLayout>} />
        <Route path="/quiz/:id" element={<MainLayout><QuizPage /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
        <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
        <Route path='/conheca' element={<MainLayout><ConhecaPage /></MainLayout>} />
        <Route path="/signup" element={<MainLayout><SignupPage /></MainLayout>} />
        <Route path="/project" element={<MainLayout><PrePage /></MainLayout>} />
        <Route path="/project/1" element={<MainLayout><Projeto /></MainLayout>} />

      /** Rota para página de erro,  quando não há um domínio a página "ErrorPage" é renderizada */
        <Route path="*" element={<MainLayout><ErrorPage /></MainLayout>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
