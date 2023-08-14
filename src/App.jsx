import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="mainPage"></Container>
      <footer className="footer text-center pt-3">
        <p>&copy, Exercise_api_clima. Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
