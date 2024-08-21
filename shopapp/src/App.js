import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList'
import CartComponent from './components/CartComponent'
import Details from './components/Details'
import ProductForm from './components/ProductForm'
import Default from './components/Default'
import NavbarComponent from './components/NavbarComponent'
function App() {
  return (
    <div className="container">
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
