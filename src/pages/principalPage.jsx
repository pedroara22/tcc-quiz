import { Link } from "react-router-dom";
import mainImg from "/priPage.png";

export default function PrincipalPage() {
  return (
    <div id="principalPage">
      <div id="text">
        <p>JOVEM - POLÍTICA - BRASIL</p>
        <h3>Cidadania em</h3>
        <h3>formação</h3>
        <p>Inserção de jovens na política</p>
        <div id="buttons">
          <Link to="/conheca">
          <button>Conheça</button>
          </Link>
          <Link to="/project">
          <button>Projeto</button>
          </Link>
        </div>
      </div>
      <img src={mainImg} />
    </div>
  );
}
