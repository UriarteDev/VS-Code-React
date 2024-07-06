
import './App.css';
import {ListarProductos} from './components/ListarProductos';
import { BrowserRouter as Router, Route ,Routes}from "react-router-dom";
import Header from "./components/Header";
import Cliente from "./Screens/Cliente";
import Producto from "./Screens/Producto";
import Home from './Screens/Home';

function App() {
  return (
    <div>  
      <Router>
        <Header/>
        <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/Cliente" element={<Cliente/>} />
          <Route path="/Producto" element={<Producto/>} />
        </Routes>
      </Router>
      <div>
        <ListarProductos />
      </div>
    </div>

  );
}

export default App;
