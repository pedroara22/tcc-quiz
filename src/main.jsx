import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import QuizPage from "./pages/quizPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/app" element={<App />} />
      <Route path="/quiz/:id" element={<QuizPage />} />
    </Routes>
  </BrowserRouter>
);
