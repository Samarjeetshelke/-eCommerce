import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";


function App() {
  return (
   <>
     <Header/>
      <main>
        <Container>
          <h1>Welcome to my App!</h1>
        </Container>
      </main>
      <Footer/>
   </>
  );
}

export default App;
