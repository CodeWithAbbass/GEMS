
import './App.css';
import './Css/General.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/pages/Home';
import AllProducts from './components/pages/AllProducts';
import NewArrivals from './components/pages/NewArrivals';
import HelpCenter from './components/pages/HelpCenter';
import Download from './components/pages/Download';
import Blog from './components/pages/Blog';
import Affiliate from './components/pages/Affiliate';
import WhereToBuy from './components/pages/WhereToBuy';
import Cart from './components/pages/Cart';
import Search from './components/pages/Search';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import User from './components/pages/User';
import About from './components/pages/About';
import NewsRoom from './components/pages/NewsRoom';
import AddProduct from './components/pages/AddProduct';
import Footer from './components/Footer';
import StateProvider from './context/StateProvider';

 
function App() {
  return (
    <div id="Back_to_Top">
      <StateProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/download" element={<Download />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/wheretobuy" element={<WhereToBuy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsroom" element={<NewsRoom />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      <a href="#Back_to_Top" className="btn scrollUp bg-white border-5 border-white"><i className="fa fa-angle-up" /></a>
      </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
