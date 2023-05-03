import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="allproducts" element={<AllProducts />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      {/* <div className=''> */}
      {/* <Home/> */}
      {/* </div> */}
    </>
  );
}

export default App;
