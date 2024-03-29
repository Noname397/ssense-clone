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
import { EditAddress } from "./components/Account/EditAddress";
import { Checkout } from "./pages/Checkout";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./configs/firebase-config";
function App() {
  const productsCollectionRef = collection(db,"products")
  const [allProducts,setAllProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      const processedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAllProducts(processedData)
    }
    getProducts();
  },[])
  const linkifyString = (str) => {
    if (!str) {
      return ""; // Handle undefined or null case
    }
    return str.replace(/\s+/g, "-").replace(/['"]+/g, "").replace(/\*+/g, "").toLowerCase();
  };
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
            <Route path="/account/addresses/edit/:index" element={<EditAddress></EditAddress>}></Route>
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
            {/* {
              allProducts.map((item,index) => {
                return (
                  <Route path={`/product/${linkifyString(item.brand)}/${linkifyString(item.name)}`}
                  element={<ProductDetails product={item} />}
                  >
                  </Route>
                )
              })
            } */}
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
