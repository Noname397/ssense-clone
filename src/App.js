import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Account } from "./pages/Account";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Menswear } from "./pages/Menswear";
import { Womenswear } from "./pages/Womenswear";
import { Everythingelse } from "./pages/Everythingelse";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ProductDetails } from "./components/Products/ProductDetails";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/men" element={<Menswear />} />
          <Route path="/women" element={<Womenswear />} />
          <Route path="/everything-else" element={<Everythingelse />} />
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/product/:brand/:name" element={<ProductDetails />}></Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
