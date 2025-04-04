
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import banner_bs from './Components/Assets/images/Banners/FARMINGO.png'
import banner_dt from './Components/Assets/images/Banners/td.png'
import main_b from './Components/Assets/images/Banners/main.png'
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path="/allproducts" element={<ShopCategory banner={main_b} category="allproducts"/>}/> 
        <Route path="/bests" element={<ShopCategory banner={banner_bs} category="bests"/>}/>
        <Route path='/deals_today' element={<ShopCategory banner={banner_dt} category="deals_today"/>}/> 
        <Route path='/product' element={<Product/>}> 
          <Route path=':productId' element={<Product/>}/> 
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} /> 
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
