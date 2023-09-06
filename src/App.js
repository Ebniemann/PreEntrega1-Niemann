import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import ItemList from "./component/ItemListContainer/ItemListContainer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <ItemList greeting={"Carreras"} />
        <ToastContainer />
      </body>
    </>
  );
}

export default App;
