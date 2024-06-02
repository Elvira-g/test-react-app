import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ContactsPage } from "./pages/ContactsPage";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import { MainPage } from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";
import { StoryPage } from "./pages/StoryPage";
import { ProductType } from "./types";

function App() {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState<ProductType | undefined>(undefined);

  useEffect(() => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
      .then((res) => setProduct(res.data));
  }, [productId]);

  return (
    <div>
      <BrowserRouter>
        <Header />

        <div>
          <Routes>
            <Route
              element={<MainPage setProductId={setProductId} />}
              path="/"
            />
            <Route element={<StoryPage />} path="/story" />
            <Route
              element={<ProductsPage setProductId={setProductId} />}
              path="/products"
            />
            <Route element={<FaqPage />} path="/faq" />
            <Route element={<ContactsPage />} path="/contacts" />
            <Route
              element={
                <ProductPage product={product} setProductId={setProductId} />
              }
              path="/product"
            />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;