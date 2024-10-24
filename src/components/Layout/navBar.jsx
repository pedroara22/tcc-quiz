import { Link } from "react-router-dom";
import profImage from "/AquarelaEleitoral.png";
export default function NavBar() {
  return (
    <div id="navBar">
      <div id="navBarProfile">
        <img src={profImage} />
        <p>Aquarela Eleitoral</p>
      </div>
      <div id="navBarLinks">
        <Link to="/">Home</Link>
        <Link to="/conheca">Conheça</Link>
        <Link to="/project">Projeto</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </div>
  );
}
