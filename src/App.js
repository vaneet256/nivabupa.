import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/header/Navbar";
import { Container } from "@mui/material";
import Body from "./component/body/Body";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar />
        <Body />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
