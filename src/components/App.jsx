import Home from "./Home";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div
        className="site-name"
        style={{ textAlign: "center", marginTop: "2%" }}
      >
        <img src={logo} />
      </div>
      <Home />
    </div>
  );
}

export default App;
