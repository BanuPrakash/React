import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList'
import Default from './components/Default'
import NavbarComponent from './components/NavbarComponent'
import { lazy, Suspense } from 'react';


// below components are not part of "bundle.js"
const CartComponent = lazy(() => import('./components/CartComponent'));
const Details = lazy(() => import('./components/Details'));
const ProductForm = lazy(() => import('./components/ProductForm'));



function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart....</h1>}>
            <CartComponent />
          </Suspense>
        } />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading Details....</h1>}>
            <Details />
          </Suspense>} />
        <Route path='/new_product' element={
          <Suspense fallback={<h1>Loading Form....</h1>}>
            <ProductForm />
          </Suspense>
        } />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
