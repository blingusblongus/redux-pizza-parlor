import "./Header.css";
import TotalPrice from "../TotalPrice/TotalPrice.jsx";

function Header({ display }) {
  return (
    <>
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <div>{display ? <TotalPrice /> : <p></p>}</div>
    </>
  );
}

export default Header;
