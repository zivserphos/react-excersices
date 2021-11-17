/* eslint-disable no-unused-vars */
import Greetings from "./Greetings";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Basket from "./components/main/Basket";
import Search from "./components/main/main";
import Groceries from "./components/main/groceries";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
