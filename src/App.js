import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Account } from "./pages/Account";
import { AuthProvider } from "./contexts/AuthContext";
import { Menswear } from "./pages/Menswear";
import { Womenswear } from "./pages/Womenswear";
import { Everythingelse } from "./pages/Everythingelse";
import { ShoppingCart } from "./pages/ShoppingCart";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/men" element={<Menswear />} />
          <Route path="/women" element={<Womenswear />} />
          <Route path="/everything-else" element={<Everythingelse />} />
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
