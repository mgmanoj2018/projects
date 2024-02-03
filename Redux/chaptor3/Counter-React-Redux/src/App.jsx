import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Control from "./components/Control";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";
function App() {
 const privacy = useSelector(store=>store.privacy)
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-12 mx-auto">
          {privacy ?<Privacy/> :<DisplayCounter />}
            <Control/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
