import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from "./pages/Login";
import ProductsDetails from "./pages/ProductsDetails";
import ProductsList from "./pages/ProductsList";
import Purchases from "./pages/Purchases";
import LoadingDisplay from "./components/LoadingDisplay";
import { useSelector } from "react-redux";

function App() {

  const loadingDisplay = useSelector(state => state.loadingDisplay);

  return (
    <>
      <HashRouter>
        <div>
          <NavBar/>
          {loadingDisplay && <LoadingDisplay/>}
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/purchases" element={<Purchases />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    </>
  );
}

export default App;
