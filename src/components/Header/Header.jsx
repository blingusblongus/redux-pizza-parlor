import "./Header.css";
import TotalPrice from "../TotalPrice/TotalPrice.jsx";
import { useHistory } from "react-router";

function Header() {
  const history = useHistory();

  const toHome = () => {
    console.log("inside toHome");
    history.push("/");
  }; // end toInfo

  return (
    <div className="headerContainer">
      <header className="App-header" onClick={toHome}>
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <TotalPrice />
    </div>
  );
}

export default Header;
