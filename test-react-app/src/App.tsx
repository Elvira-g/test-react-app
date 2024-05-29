
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ContactsPage } from './components/pages/ContactsPage/ContactsPage';
import { FaqPage } from './components/pages/FaqPage/FaqPage';
import { MainPage } from './components/pages/MainPage/MainPage';
import { ProductsPage } from './components/pages/ProductsPage/ProductsPage';
import { StoryPage } from './components/pages/StoryPage/StoryPage';
import { ProductPage } from './ProductPage/ProductPage';
import { ProductType } from './store/store';

function App() {

  const [productId, setProductId] = useState(1)
  const [product, setProduct] = useState<ProductType>({
    id: 0,
    name: '',
    product_type: '',
    price: '',
    image_link: '',
    brand: '',
    description: ''
})

useEffect(() => {
    const fetchProduct= async () => {
        const res = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
        setProduct(res.data)
    }
    fetchProduct()
}, [productId])


  return (
    <div>
      <BrowserRouter>
        <Header />

          <div>
            <Routes>
              <Route element={<MainPage setProductId={setProductId} />}
                path="/"/>
              <Route element={<StoryPage />}
                path="/story"/>
              <Route element={<ProductsPage setProductId={setProductId} />}
                path="/products"/>
              <Route element={<FaqPage />}
                path="/faq"/>
              <Route element={<ContactsPage />}
                path="/contacts"/>
              <Route element={<ProductPage product={product} setProductId={setProductId}/>}
                path="/product"/>
              <Route
                path='*'
                element={<div>404 NOT FOUND</div>}/>
            </Routes>
              

              {/* <Route path='/dialogs'
                render={() => <SuspendedDialogs /> }/>

              <Route path='/profile/:userId?'
                render={() => <SuspendedProfile /> }/>

              <Route path='/users'
                render={() => <UsersPage pageTitle={"Самураи"}/>}/>

              <Route path='/login'
                render={() => <LoginPage/>}/>

              <Route path='*'
                render={() => <div>404 NOT FOUND</div>}/> */}
        </div>

          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
