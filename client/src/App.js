import { Link } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavBar />
      {/* <header className="App-header">
        <Link to="/order">Order</Link>
        <Link to="/food">Food</Link>
        <Link to="/service">Service</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Auth</Link>
      </header> */}
      <div>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
