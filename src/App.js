import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Account } from "./pages/Account";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AllProducts } from "./pages/AllProducts";
import { Everythingelse } from "./pages/Everythingelse";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ProductDetails } from "./components/Products/ProductDetails";
import { NewProduct } from "./pages/NewProduct";
import { CartContextProvider } from "./contexts/CartContext";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/everything-else" element={<Everythingelse />} />
            <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
            <Route
              path="/product/:brand/:name"
              element={<ProductDetails />}
            ></Route>
            <Route path="/new-product" element={<NewProduct />} />
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
