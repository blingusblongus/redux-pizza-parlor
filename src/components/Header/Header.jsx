import './Header.css';
import TotalPrice from '../TotalPrice/TotalPrice.jsx'

function Header() {
    return (
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
        <TotalPrice />
      </header>
    );
}

export default Header;