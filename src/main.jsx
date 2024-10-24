import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import QuizPage from "./pages/quizPage.jsx";
import MainLayout from "./components/Layout/mainLayout.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import PrincipalPage from "./pages/principalPage.jsx";

createRoot(document.getElementById("root")).render(
  /** Criando rotas para o site */

  /** Todas as rotas tem um layout envolvendo elas, esse layout é encontrado na página components 
   * e é responsável pela estrutura, ele fornece coisas como o cabeçalho que também é encontrado na pasta components
   */
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout><PrincipalPage /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><LoginPage /></MainLayout>} />
      <Route path="/quiz" element={<MainLayout><App /></MainLayout>} />
      <Route path="/quiz/:id" element={<MainLayout><QuizPage /></MainLayout>} />
      /** Rota para página de erro,  quando não há um domínio a página "ErrorPage" é renderizada */
      <Route path="*" element={<MainLayout><ErrorPage /></MainLayout>} />
    </Routes>
  </BrowserRouter>
);
