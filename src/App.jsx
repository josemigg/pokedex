import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header className="menu">
        <strong>POKÉDEX</strong>
        <nav>
          <Link to="/">Listado</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
