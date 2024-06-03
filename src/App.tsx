import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productAPI } from "./api/productsApi";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ContactsPage } from "./pages/ContactsPage";
import { FaqPage } from "./pages/FaqPage";
import { MainPage } from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";
import { StoryPage } from "./pages/StoryPage";
import { ProductType } from "./types";


function App() {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState<ProductType | undefined>(undefined);

  useEffect(() => {
    getProduct(productId).then((data) => setProduct(data));
  }, [productId]);

  const getProduct = async (productId: number) => {
    let data = await productAPI.getProduct(productId);
    return data
  };

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
