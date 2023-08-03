import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Account } from "./pages/Account";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AllProducts } from "./pages/AllProducts";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ProductDetails } from "./components/Products/ProductDetails";
import { NewProduct } from "./pages/NewProduct";
import { CartContextProvider } from "./contexts/CartContext";
import { AccountDetails } from "./components/Account/AccountDetails";
import { Address } from "./components/Account/Address";
import { EmailPreference } from "./components/Account/EmailPreferences";
import { OrderHistory } from "./components/Account/OrderHistory";
import { NewAddress } from "./components/Account/NewAddress";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/account/account-details"
              element={<AccountDetails />}
            />
            <Route path="/account/addresses" element={<Address />} />
            <Route path="/account/addresses/new" element={<NewAddress />} />
            <Route
              path="/account/email-preference"
              element={<EmailPreference />}
            />
            <Route
              path="/account/order-history"
              element={<OrderHistory />}
            />
            <Route path="/products" element={<AllProducts />} />
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
