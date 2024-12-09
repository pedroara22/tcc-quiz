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
import Gameover from './pages/quiz/gameover.jsx';
import End from './pages/quiz/end.jsx';
import CreateQuiz from './pages/quiz/createQuiz.jsx';
import CreateOptions from './pages/quiz/createOptions.jsx';
import EditProfilePage from './pages/profile/editProfile.jsx';
import EditQuizQuestions from './pages/quiz/editQuiz.jsx';
import Sobre from './pages/sobre/sobre.jsx';
import Equipe from './pages/sobre/equipe.jsx';

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
        <Route path="/login/createQuiz" element={<MainLayout><LoginPage /></MainLayout>} />
        <Route path='/conheca' element={<MainLayout><ConhecaPage /></MainLayout>} />
        <Route path="/signup" element={<MainLayout><SignupPage /></MainLayout>} />
        <Route path="/signup/createQuiz" element={<MainLayout><SignupPage /></MainLayout>} />
        <Route path="/project" element={<MainLayout><PrePage /></MainLayout>} />
        <Route path="/project/1" element={<MainLayout><Projeto /></MainLayout>} />
        <Route path='/gameover' element={<MainLayout><Gameover /></MainLayout>} />
        <Route path='/endgame/:score' element={<MainLayout><End /></MainLayout>} />
        <Route path="/createQuiz" element={<MainLayout><CreateQuiz /></MainLayout>} />
        <Route path="/createOptions/:index" element={<MainLayout><CreateOptions /></MainLayout>} />
        <Route path="/editProfile" element={<MainLayout><EditProfilePage /></MainLayout>} />
        <Route path="/editQuiz" element={<MainLayout><EditQuizQuestions /></MainLayout>} />
        <Route path='/about' element={<MainLayout><Sobre /></MainLayout>} />
        <Route path='/equipe' element={<MainLayout><Equipe /></MainLayout>} />

      /** Rota para página de erro,  quando não há um domínio a página "ErrorPage" é renderizada */
        <Route path="*" element={<MainLayout><ErrorPage /></MainLayout>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
