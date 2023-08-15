import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ubicacion from "./components/Ubicacion";

function App() {
  return (
    <>
      <Container fluid className="mainPage">
        <img src="/logo.jpg" width={650} alt="logo" className="m-5" />
        <Ubicacion></Ubicacion>
      </Container>
      <footer className="footer text-center pt-3">
        <p className="fs-5">
          &copy, Exercise_api_clima. Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
